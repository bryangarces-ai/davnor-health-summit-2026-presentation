/**
 * Presenter Console View Controller — DAVNOR Health Summit 2026 Presentation System
 * Reusable engine for dual-window projection, timer, next-slide preview, and instant search.
 */
(function () {
  'use strict';

  function getDeckKey() {
    if (typeof window !== 'undefined' && window.DECK_KEY) return window.DECK_KEY;
    var path = (typeof window !== 'undefined' && window.location && window.location.pathname) ? window.location.pathname.toLowerCase() : '';
    if (path.indexOf('00-program') !== -1) return '00-program';
    if (path.indexOf('01-group') !== -1) return '01-group';
    if (path.indexOf('02-individual') !== -1) return '02-individual';
    if (path.indexOf('03-top-program') !== -1) return '03-top-program';
    if (path.indexOf('04-consolation') !== -1) return '04-consolation';
    if (path.indexOf('05-official-results') !== -1 || path.indexOf('05-results') !== -1) return '05-results';
    return 'default';
  }

  function loadSlides() {
    var initial = (typeof window !== 'undefined' && window.SLIDES_DATA && Array.isArray(window.SLIDES_DATA)) ? window.SLIDES_DATA : [];
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        var key = 'davnor_deck_' + getDeckKey();
        var saved = window.localStorage.getItem(key);
        if (saved) {
          var parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) {
            return parsed;
          }
        }
      }
    } catch (e) {}
    return initial;
  }

  var slides = [];
  var currentIndex = 0;
  var timerSeconds = 0;
  var timerInterval = null;
  var isTimerRunning = false;
  var projectorBc = null;
  var projectorWindow = null;
  var searchDebounceTimer = null;

  function formatTime(totalSeconds) {
    var secs = Math.max(0, Math.floor(totalSeconds));
    var hours = Math.floor(secs / 3600);
    var mins = Math.floor((secs % 3600) / 60);
    var remainingSecs = secs % 60;

    var mm = (mins < 10 ? '0' : '') + mins;
    var ss = (remainingSecs < 10 ? '0' : '') + remainingSecs;

    if (hours > 0) {
      return hours + ':' + mm + ':' + ss;
    }
    return mm + ':' + ss;
  }

  function formatWallClock(date) {
    var d = date || new Date();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    var hh = (hours < 10 ? '0' : '') + hours;
    var mm = (mins < 10 ? '0' : '') + mins;
    var ss = (secs < 10 ? '0' : '') + secs;
    return hh + ':' + mm + ':' + ss + ' ' + ampm;
  }

  function searchSlides(query) {
    if (!query || typeof query !== 'string') return [];
    var q = query.trim().toLowerCase();
    if (!q) return [];

    var results = [];
    var slideNumQuery = null;
    var numMatch = q.match(/^#?(\d+)$/);
    if (numMatch) {
      slideNumQuery = parseInt(numMatch[1], 10);
    }

    for (var i = 0; i < slides.length; i++) {
      var s = slides[i];
      var slideNum = i + 1;
      var title = (s.title || '').toLowerCase();
      var subtitle = (s.subtitle || '').toLowerCase();
      var municipality = (s.municipality || '').toLowerCase();
      var category = (s.category || '').toLowerCase();
      var citationsStr = Array.isArray(s.citations) ? s.citations.join(' ').toLowerCase() : '';

      var matched = false;
      var score = 0;

      if (slideNumQuery === slideNum) {
        matched = true;
        score += 100;
      }
      if (title.indexOf(q) !== -1) {
        matched = true;
        score += 50;
      }
      if (municipality.indexOf(q) !== -1) {
        matched = true;
        score += 40;
      }
      if (category.indexOf(q) !== -1) {
        matched = true;
        score += 30;
      }
      if (subtitle.indexOf(q) !== -1 || citationsStr.indexOf(q) !== -1) {
        matched = true;
        score += 20;
      }

      if (matched) {
        results.push({
          index: i,
          slide: s,
          score: score
        });
      }
    }

    results.sort(function (a, b) {
      return b.score - a.score;
    });

    return results;
  }

  function syncToProjector(action, extra) {
    var payload = Object.assign({
      action: action,
      deckKey: getDeckKey(),
      slideIndex: currentIndex,
      timestamp: Date.now()
    }, extra || {});

    if (projectorBc) {
      try {
        projectorBc.postMessage(payload);
      } catch (e) {}
    }

    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem('davnor_projector_sync_msg', JSON.stringify(payload));
      }
    } catch (e) {}
  }

  function jumpToSlide(index) {
    if (slides.length === 0) return;
    var target = Math.max(0, Math.min(index, slides.length - 1));
    currentIndex = target;
    renderPreviews();
    syncToProjector('GOTO_SLIDE', { slideIndex: currentIndex });
  }

  function next() {
    jumpToSlide(currentIndex + 1);
  }

  function prev() {
    jumpToSlide(currentIndex - 1);
  }

  function openProjectorWindow() {
    if (typeof window === 'undefined') return;
    var targetUrl = 'index.html?mode=projector#' + currentIndex;
    projectorWindow = window.open(targetUrl, 'davnor_projector_screen', 'width=1280,height=720,menubar=no,toolbar=no,location=no,status=no');
    if (projectorWindow && projectorWindow.focus) {
      projectorWindow.focus();
    }
  }

  function renderPreviews() {
    if (typeof document === 'undefined') return;

    var nextIndex = currentIndex + 1;

    var curFrame = document.getElementById('currentSlideFrame');
    if (curFrame) {
      try {
        if (curFrame.contentWindow && curFrame.contentWindow.PresentationEngine && typeof curFrame.contentWindow.PresentationEngine.goToSlide === 'function') {
          curFrame.contentWindow.PresentationEngine.goToSlide(currentIndex);
        } else if (curFrame.contentWindow && curFrame.contentWindow.postMessage) {
          curFrame.contentWindow.postMessage({ type: 'RENDER_SLIDE', slideIndex: currentIndex }, '*');
        } else {
          curFrame.src = 'index.html?mode=preview#' + currentIndex;
        }
      } catch (e) {
        curFrame.src = 'index.html?mode=preview#' + currentIndex;
      }
    }

    var nextFrame = document.getElementById('nextSlideFrame');
    if (nextFrame) {
      if (nextIndex < slides.length) {
        nextFrame.style.display = 'block';
        try {
          if (nextFrame.contentWindow && nextFrame.contentWindow.PresentationEngine && typeof nextFrame.contentWindow.PresentationEngine.goToSlide === 'function') {
            nextFrame.contentWindow.PresentationEngine.goToSlide(nextIndex);
          } else if (nextFrame.contentWindow && nextFrame.contentWindow.postMessage) {
            nextFrame.contentWindow.postMessage({ type: 'RENDER_SLIDE', slideIndex: nextIndex }, '*');
          } else {
            nextFrame.src = 'index.html?mode=preview#' + nextIndex;
          }
        } catch (e) {
          nextFrame.src = 'index.html?mode=preview#' + nextIndex;
        }
      } else {
        nextFrame.style.display = 'none';
      }
    }

    var counter = document.getElementById('slideCounter');
    if (counter) {
      counter.textContent = 'Slide ' + (currentIndex + 1) + ' of ' + slides.length;
    }

    var prevBtn = document.getElementById('prevSlideBtn');
    if (prevBtn) {
      prevBtn.disabled = (currentIndex === 0);
    }
    var nextBtn = document.getElementById('nextSlideBtn');
    if (nextBtn) {
      nextBtn.disabled = (currentIndex >= slides.length - 1);
    }

    var notes = document.getElementById('slideNotesContent');
    if (notes && slides[currentIndex]) {
      var cur = slides[currentIndex];
      var html = '<strong>' + (cur.title || 'Slide ' + (currentIndex + 1)) + '</strong>';
      if (cur.category) html += '<br><span style="color:var(--pres-gold);">' + cur.category + '</span>';
      if (cur.subtitle) html += '<br><span style="color:#A0A6B5;">' + cur.subtitle + '</span>';
      if (Array.isArray(cur.citations) && cur.citations.length > 0) {
        html += '<br><div style="margin-top:4px; font-size:0.8rem; color:#CCD1DE;">Citations: ' + cur.citations.join(' · ') + '</div>';
      }
      notes.innerHTML = html;
    }
  }

  function renderSearchResults(results) {
    if (typeof document === 'undefined') return;
    var list = document.getElementById('searchResultsList');
    if (!list) return;

    if (!results || results.length === 0) {
      list.innerHTML = '<div style="padding:16px; text-align:center; color:#7A8190; font-size:0.88rem;">No matching awardees or slides found.</div>';
      list.classList.add('active');
      return;
    }

    var html = '';
    for (var i = 0; i < Math.min(results.length, 30); i++) {
      var item = results[i];
      var s = item.slide;
      var slideNum = item.index + 1;
      var title = s.title || ('Slide ' + slideNum);
      var meta = s.municipality || s.category || s.subtitle || '';

      html += '<div class="search-item" data-index="' + item.index + '">' +
        '<div class="search-item-info">' +
          '<div class="search-item-title">' + title + '</div>' +
          (meta ? '<div class="search-item-meta">' + meta + '</div>' : '') +
        '</div>' +
        '<span class="search-item-badge">#' + slideNum + '</span>' +
      '</div>';
    }

    list.innerHTML = html;
    list.classList.add('active');

    var items = list.querySelectorAll('.search-item');
    for (var j = 0; j < items.length; j++) {
      items[j].addEventListener('click', function () {
        var idx = parseInt(this.getAttribute('data-index'), 10);
        jumpToSlide(idx);
        closeSearch();
      });
    }
  }

  function closeSearch() {
    if (typeof document === 'undefined') return;
    var list = document.getElementById('searchResultsList');
    var input = document.getElementById('presenterSearch');
    if (list) list.classList.remove('active');
    if (input) input.value = '';
    var clearBtn = document.getElementById('searchClearBtn');
    if (clearBtn) clearBtn.style.display = 'none';
  }

  function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    isTimerRunning = true;
    timerInterval = setInterval(function () {
      timerSeconds++;
      var timerElem = document.getElementById('elapsedTimer');
      if (timerElem) {
        timerElem.textContent = formatTime(timerSeconds);
      }
    }, 1000);
  }

  function toggleTimer() {
    var toggleBtn = document.getElementById('timerToggleBtn');
    if (isTimerRunning) {
      if (timerInterval) clearInterval(timerInterval);
      isTimerRunning = false;
      if (toggleBtn) toggleBtn.innerHTML = '▶';
    } else {
      startTimer();
      if (toggleBtn) toggleBtn.innerHTML = '⏸';
    }
  }

  function resetTimer() {
    timerSeconds = 0;
    var timerElem = document.getElementById('elapsedTimer');
    if (timerElem) {
      timerElem.textContent = formatTime(0);
    }
  }

  function updateWallClock() {
    var clockElem = document.getElementById('wallClock');
    if (clockElem) {
      clockElem.textContent = formatWallClock();
    }
  }

  function setupChannel() {
    if (typeof window === 'undefined' || !window.BroadcastChannel) return;
    try {
      projectorBc = new BroadcastChannel('davnor_projector_sync');
      projectorBc.onmessage = function (e) {
        if (!e.data || e.data.deckKey !== getDeckKey()) return;
        if (e.data.action === 'GOTO_SLIDE' && typeof e.data.slideIndex === 'number') {
          if (e.data.slideIndex !== currentIndex) {
            currentIndex = e.data.slideIndex;
            renderPreviews();
          }
        } else if (e.data.action === 'SYNC_REQUEST') {
          syncToProjector('SYNC_RESPONSE', { slideIndex: currentIndex });
        }
      };
    } catch (e) {}
  }

  function init() {
    slides = loadSlides();

    // Check initial slide from hash
    if (typeof window !== 'undefined' && window.location && window.location.hash) {
      var hashVal = parseInt(window.location.hash.replace('#', ''), 10);
      if (!isNaN(hashVal) && hashVal >= 0 && hashVal < slides.length) {
        currentIndex = hashVal;
      }
    }

    setupChannel();
    renderPreviews();

    var curFrame = document.getElementById('currentSlideFrame');
    var nextFrame = document.getElementById('nextSlideFrame');
    if (curFrame) {
      curFrame.addEventListener('load', function () {
        try {
          if (curFrame.contentWindow && curFrame.contentWindow.PresentationEngine) {
            curFrame.contentWindow.PresentationEngine.goToSlide(currentIndex);
          }
        } catch (e) {}
      });
    }
    if (nextFrame) {
      nextFrame.addEventListener('load', function () {
        try {
          var nIdx = currentIndex + 1;
          if (nextFrame.contentWindow && nextFrame.contentWindow.PresentationEngine) {
            nextFrame.contentWindow.PresentationEngine.goToSlide(nIdx);
          }
        } catch (e) {}
      });
    }

    // Clocks
    startTimer();
    updateWallClock();
    if (typeof setInterval !== 'undefined') {
      setInterval(updateWallClock, 1000);
    }

    // Attach DOM Events
    if (typeof document === 'undefined') return;

    var searchInput = document.getElementById('presenterSearch');
    var clearBtn = document.getElementById('searchClearBtn');
    if (searchInput) {
      searchInput.addEventListener('input', function () {
        var val = this.value;
        if (clearBtn) clearBtn.style.display = val ? 'block' : 'none';
        if (searchDebounceTimer) clearTimeout(searchDebounceTimer);
        searchDebounceTimer = setTimeout(function () {
          var results = searchSlides(val);
          renderSearchResults(results);
        }, 120);
      });

      searchInput.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
          closeSearch();
          this.blur();
        } else if (e.key === 'Enter') {
          var list = document.getElementById('searchResultsList');
          if (list) {
            var firstItem = list.querySelector('.search-item');
            if (firstItem) {
              var idx = parseInt(firstItem.getAttribute('data-index'), 10);
              jumpToSlide(idx);
              closeSearch();
            }
          }
        }
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener('click', function () {
        closeSearch();
        if (searchInput) searchInput.focus();
      });
    }

    // Keyboard Shortcuts
    document.addEventListener('keydown', function (e) {
      if (document.activeElement === searchInput) {
        return; // do not hijack navigation keys while user is typing in search
      }

      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
        case 'PageDown':
          e.preventDefault();
          next();
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          prev();
          break;
        case 'Home':
          e.preventDefault();
          jumpToSlide(0);
          break;
        case 'End':
          e.preventDefault();
          jumpToSlide(slides.length - 1);
          break;
        case '/':
          e.preventDefault();
          if (searchInput) {
            searchInput.focus();
            searchInput.select();
          }
          break;
        case 'c':
        case 'C':
          triggerConfetti();
          break;
        case 'm':
        case 'M':
          triggerSound();
          break;
      }
    });

    // Close search on outside click
    document.addEventListener('click', function (e) {
      var box = document.querySelector('.presenter-search-box');
      if (box && !box.contains(e.target)) {
        var list = document.getElementById('searchResultsList');
        if (list) list.classList.remove('active');
      }
    });
  }

  function triggerConfetti() {
    syncToProjector('TRIGGER_CONFETTI');
  }

  function triggerSound() {
    syncToProjector('TRIGGER_SOUND');
  }

  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init();
    }
  }

  var app = {
    init: init,
    formatTime: formatTime,
    formatWallClock: formatWallClock,
    searchSlides: searchSlides,
    jumpToSlide: jumpToSlide,
    next: next,
    prev: prev,
    openProjectorWindow: openProjectorWindow,
    toggleTimer: toggleTimer,
    resetTimer: resetTimer,
    triggerConfetti: triggerConfetti,
    triggerSound: triggerSound,
    getCurrentIndex: function () { return currentIndex; },
    getSlides: function () { return slides; }
  };

  if (typeof window !== 'undefined') {
    window.PresenterConsoleApp = app;
  }
})();

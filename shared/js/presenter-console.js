/**
 * Presenter Console View Controller — DAVNOR Health Summit 2026 Presentation System
 * Reusable engine for dual-window projection, timer, next-slide preview, and instant search.
 */
(function () {
  'use strict';

  var SUITE_SEQUENCES = {
    'nutrition-congress-2026': [
      { folder: '00-program-flow', title: 'Deck 00 · Program Flow', shortTitle: 'Deck 00 · Program Flow', deckNum: '00' },
      { folder: '01-pangga-ko-si-sam', title: 'Deck 01 · Pangga Ko Si Sam Special Feature', shortTitle: 'Deck 01 · Pangga Ko Si Sam', deckNum: '01' },
      { folder: '02-outstanding-lgu', title: 'Deck 02 · Outstanding LGU Awards', shortTitle: 'Deck 02 · Outstanding LGU', deckNum: '02' },
      { folder: '03-outstanding-lnfp', title: 'Deck 03 · Outstanding LNFP Awards', shortTitle: 'Deck 03 · Outstanding LNFP', deckNum: '03' },
      { folder: '04-special-awards', title: 'Deck 04 · Special & Contender Awards', shortTitle: 'Deck 04 · Special Awards', deckNum: '04' },
      { folder: '05-regional-and-pnc', title: 'Deck 05 · Nutrition Partners & PNC Committee', shortTitle: 'Deck 05 · Partners & PNC', deckNum: '05' },
      { folder: '06-pnet-recognition', title: 'Deck 06 · PNET Recognition & TWG', shortTitle: 'Deck 06 · PNET Recognition', deckNum: '06' },
      { folder: '07-bns-loyalty-awards', title: 'Deck 07 · BNS Loyalty & Closing Ceremony', shortTitle: 'Deck 07 · BNS Loyalty Awards', deckNum: '07' }
    ],
    'tb-summit-2026': [
      { folder: '01-special-awards', title: 'Deck 01 · Special Awards', shortTitle: 'Deck 01 · Special Awards', deckNum: '01' },
      { folder: '02-referring-facilities', title: 'Deck 02 · Referring Facilities', shortTitle: 'Deck 02 · Referring Facilities', deckNum: '02' },
      { folder: '03-individual-awards', title: 'Deck 03 · Individual Awards', shortTitle: 'Deck 03 · Individual Awards', deckNum: '03' },
      { folder: '04-tb-providers', title: 'Deck 04 · TB Providers', shortTitle: 'Deck 04 · TB Providers', deckNum: '04' },
      { folder: '05-top-health-centers', title: 'Deck 05 · Top Health Centers', shortTitle: 'Deck 05 · Top Health Centers', deckNum: '05' },
      { folder: '06-top-bhw-10-4', title: 'Deck 06 · Top BHW (10-4)', shortTitle: 'Deck 06 · Top BHW 10-4', deckNum: '06' },
      { folder: '07-top-barangay-10-4', title: 'Deck 07 · Top Barangay (10-4)', shortTitle: 'Deck 07 · Top Barangay 10-4', deckNum: '07' },
      { folder: '08-consolation-tb-providers', title: 'Deck 08 · Consolation TB Providers', shortTitle: 'Deck 08 · Consolation', deckNum: '08' },
      { folder: '09-top-bhw-3-1', title: 'Deck 09 · Top BHW (3-1)', shortTitle: 'Deck 09 · Top BHW 3-1', deckNum: '09' },
      { folder: '10-top-barangay-3-1', title: 'Deck 10 · Top Barangay (3-1)', shortTitle: 'Deck 10 · Top Barangay 3-1', deckNum: '10' },
      { folder: '11-top-tb-providers-3-1', title: 'Deck 11 · Top TB Providers (3-1)', shortTitle: 'Deck 11 · Top TB Providers', deckNum: '11' }
    ],
    'root': [
      { folder: '00-program-health-summit-2026', title: 'Deck 00 · Health Summit Preliminaries', shortTitle: 'Deck 00 · Preliminaries', deckNum: '00' },
      { folder: '01-group-awardees', title: 'Deck 01 · Group Awardees', shortTitle: 'Deck 01 · Group Awardees', deckNum: '01' },
      { folder: '02-individual-awardees', title: 'Deck 02 · Individual Awardees', shortTitle: 'Deck 02 · Individual Awardees', deckNum: '02' },
      { folder: '03-top-program-managers', title: 'Deck 03 · Top Performing Program Managers', shortTitle: 'Deck 03 · Top Program Managers', deckNum: '03' },
      { folder: '04-consolation-and-winners', title: 'Deck 04 · Consolation & Winners', shortTitle: 'Deck 04 · Consolation & Winners', deckNum: '04' },
      { folder: '05-official-results', title: 'Deck 05 · Official Results', shortTitle: 'Deck 05 · Official Results', deckNum: '05' }
    ]
  };

  function getCurrentDeckLocation() {
    var path = (typeof window !== 'undefined' && window.location && window.location.pathname) ? window.location.pathname.replace(/\\/g, '/') : '';
    var parts = path.split('/').filter(Boolean);
    var currentFolder = '';
    var suiteKey = 'root';

    for (var i = parts.length - 1; i >= 0; i--) {
      var p = parts[i];
      if (p.toLowerCase().indexOf('.html') !== -1 || p.toLowerCase().indexOf('.htm') !== -1) {
        continue;
      }
      if (!currentFolder) {
        currentFolder = p;
        continue;
      }
      if (p.toLowerCase().indexOf('nutrition') !== -1) {
        suiteKey = 'nutrition-congress-2026';
        break;
      }
      if (p.toLowerCase().indexOf('tb-summit') !== -1) {
        suiteKey = 'tb-summit-2026';
        break;
      }
    }
    if (path.indexOf('nutrition-congress-2026') !== -1) suiteKey = 'nutrition-congress-2026';
    else if (path.indexOf('tb-summit-2026') !== -1) suiteKey = 'tb-summit-2026';

    return { suiteKey: suiteKey, currentFolder: currentFolder };
  }

  function getNextDeckInfo() {
    var loc = getCurrentDeckLocation();
    var list = SUITE_SEQUENCES[loc.suiteKey] || SUITE_SEQUENCES['root'];
    var curIdx = -1;

    for (var i = 0; i < list.length; i++) {
      if (list[i].folder.toLowerCase() === loc.currentFolder.toLowerCase()) {
        curIdx = i;
        break;
      }
    }

    if (curIdx === -1 && loc.currentFolder) {
      var numPrefix = loc.currentFolder.split('-')[0];
      if (numPrefix) {
        for (var j = 0; j < list.length; j++) {
          if (list[j].deckNum === numPrefix || list[j].folder.indexOf(numPrefix + '-') === 0) {
            curIdx = j;
            break;
          }
        }
      }
    }

    if (curIdx !== -1 && curIdx + 1 < list.length) {
      var nextDeck = list[curIdx + 1];
      return {
        folder: nextDeck.folder,
        title: nextDeck.title,
        shortTitle: nextDeck.shortTitle,
        deckNum: nextDeck.deckNum,
        previewUrl: '../' + nextDeck.folder + '/index.html?mode=preview#0',
        projectorUrl: '../' + nextDeck.folder + '/index.html?mode=projector#0',
        presenterUrl: '../' + nextDeck.folder + '/presenter.html#0',
        btnLabel: nextDeck.shortTitle
      };
    }
    return null;
  }

  function getPrevDeckInfo() {
    var loc = getCurrentDeckLocation();
    var list = SUITE_SEQUENCES[loc.suiteKey] || SUITE_SEQUENCES['root'];
    var curIdx = -1;

    for (var i = 0; i < list.length; i++) {
      if (list[i].folder.toLowerCase() === loc.currentFolder.toLowerCase()) {
        curIdx = i;
        break;
      }
    }

    if (curIdx === -1 && loc.currentFolder) {
      var numPrefix = loc.currentFolder.split('-')[0];
      if (numPrefix) {
        for (var j = 0; j < list.length; j++) {
          if (list[j].deckNum === numPrefix || list[j].folder.indexOf(numPrefix + '-') === 0) {
            curIdx = j;
            break;
          }
        }
      }
    }

    if (curIdx > 0) {
      var prevDeck = list[curIdx - 1];
      return {
        folder: prevDeck.folder,
        title: prevDeck.title,
        shortTitle: prevDeck.shortTitle,
        deckNum: prevDeck.deckNum,
        previewUrl: '../' + prevDeck.folder + '/index.html?mode=preview#last',
        projectorUrl: '../' + prevDeck.folder + '/index.html?mode=projector#last',
        presenterUrl: '../' + prevDeck.folder + '/presenter.html#last',
        btnLabel: prevDeck.shortTitle
      };
    }
    return null;
  }

  function advanceToNextDeck(nextDeck) {
    if (!nextDeck) return;

    // 1. Send broadcast message so projector window navigates seamlessly
    syncToProjector('NAVIGATE_DECK', {
      targetUrl: nextDeck.projectorUrl,
      nextDeckKey: nextDeck.folder,
      currentDeckKey: getDeckKey()
    });

    // 2. Also navigate directly if handle exists
    try {
      if (projectorWindow && !projectorWindow.closed) {
        projectorWindow.location.href = nextDeck.projectorUrl;
      }
    } catch (e) {}

    // 3. Save active deck folder to localStorage
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem('davnor_active_deck_folder', nextDeck.folder);
      }
    } catch (e) {}

    // 4. Smoothly navigate the presenter console window
    if (typeof window !== 'undefined') {
      window.location.href = nextDeck.presenterUrl;
    }
  }

  function advanceToPrevDeck(prevDeck) {
    if (!prevDeck) return;

    // 1. Send broadcast message so projector window navigates seamlessly
    syncToProjector('NAVIGATE_DECK', {
      targetUrl: prevDeck.projectorUrl,
      nextDeckKey: prevDeck.folder,
      currentDeckKey: getDeckKey()
    });

    // 2. Also navigate directly if handle exists
    try {
      if (projectorWindow && !projectorWindow.closed) {
        projectorWindow.location.href = prevDeck.projectorUrl;
      }
    } catch (e) {}

    // 3. Save active deck folder to localStorage
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem('davnor_active_deck_folder', prevDeck.folder);
      }
    } catch (e) {}

    // 4. Smoothly navigate the presenter console window
    if (typeof window !== 'undefined') {
      window.location.href = prevDeck.presenterUrl;
    }
  }

  function getDeckKey() {
    if (typeof window !== 'undefined' && window.DECK_KEY) return window.DECK_KEY;
    var path = (typeof window !== 'undefined' && window.location && window.location.pathname) ? window.location.pathname.toLowerCase() : '';
    if (path.indexOf('00-program') !== -1) return '00-program';
    if (path.indexOf('01-group') !== -1) return '01-group';
    if (path.indexOf('02-individual') !== -1) return '02-individual';
    if (path.indexOf('03-top-program') !== -1) return '03-top-program';
    if (path.indexOf('04-consolation') !== -1) return '04-consolation';
    if (path.indexOf('05-official-results') !== -1 || path.indexOf('05-results') !== -1) return '05-results';
    if (path.indexOf('special-awards') !== -1 || path.indexOf('tb-summit') !== -1) return 'tb-01-special-awards';
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
      var deptStr = (s.department || '').toLowerCase();
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
      if (subtitle.indexOf(q) !== -1 || citationsStr.indexOf(q) !== -1 || deptStr.indexOf(q) !== -1) {
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
    if (currentIndex >= slides.length - 1) {
      var nextDeck = getNextDeckInfo();
      if (nextDeck) {
        advanceToNextDeck(nextDeck);
        return;
      }
    }
    jumpToSlide(currentIndex + 1);
  }

  function prev() {
    if (currentIndex <= 0) {
      var prevDeck = getPrevDeckInfo();
      if (prevDeck) {
        advanceToPrevDeck(prevDeck);
        return;
      }
    }
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
        if (typeof nextFrame.getAttribute === 'function' && nextFrame.getAttribute('data-is-next-deck')) {
          if (typeof nextFrame.removeAttribute === 'function') {
            nextFrame.removeAttribute('data-is-next-deck');
          }
          nextFrame.src = 'index.html?mode=preview#' + nextIndex;
        } else {
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
        }
      } else {
        var nextDeck = getNextDeckInfo();
        if (nextDeck) {
          nextFrame.style.display = 'block';
          var isLoaded = (typeof nextFrame.getAttribute === 'function') ? nextFrame.getAttribute('data-is-next-deck') : null;
          if (isLoaded !== nextDeck.folder) {
            if (typeof nextFrame.setAttribute === 'function') {
              nextFrame.setAttribute('data-is-next-deck', nextDeck.folder);
            }
            nextFrame.src = nextDeck.previewUrl;
          }
        } else {
          nextFrame.style.display = 'none';
        }
      }
    }

    var counter = document.getElementById('slideCounter');
    if (counter) {
      counter.textContent = 'Slide ' + (currentIndex + 1) + ' of ' + slides.length;
    }

    var curNum = document.getElementById('currentSlideNum');
    if (curNum) {
      curNum.textContent = (currentIndex + 1);
    }
    var totalNum = document.getElementById('totalSlidesNum');
    if (totalNum) {
      totalNum.textContent = slides.length;
    }

    var prevBtn = document.getElementById('prevSlideBtn');
    var navPrev = document.getElementById('navPrevBtn');

    if (currentIndex > 0) {
      if (prevBtn) {
        prevBtn.disabled = false;
        prevBtn.innerHTML = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>';
        prevBtn.style.width = '';
        prevBtn.title = 'Previous Slide (← / PageUp / ↑)';
      }
      if (navPrev) {
        navPrev.disabled = false;
      }
    } else {
      var prevDeckInfo = getPrevDeckInfo();
      if (prevDeckInfo) {
        if (prevBtn) {
          prevBtn.disabled = false;
          prevBtn.innerHTML = '<span style="display:inline-flex; align-items:center; gap:6px; font-weight:700; font-size:0.85rem; padding:0 10px; white-space:nowrap;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg> Prev: ' + prevDeckInfo.shortTitle + '</span>';
          prevBtn.style.width = 'auto';
          prevBtn.title = 'Return to ' + prevDeckInfo.title + ' (← / PageUp / ↑)';
        }
        if (navPrev) {
          navPrev.disabled = false;
        }
      } else {
        if (prevBtn) {
          prevBtn.disabled = true;
          prevBtn.innerHTML = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>';
          prevBtn.style.width = '';
          prevBtn.title = 'Start of Ceremony';
        }
        if (navPrev) {
          navPrev.disabled = true;
        }
      }
    }

    var nextBtn = document.getElementById('nextSlideBtn');
    var navNext = document.getElementById('navNextBtn');

    if (nextIndex < slides.length) {
      if (nextBtn) {
        nextBtn.disabled = false;
        nextBtn.innerHTML = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>';
        nextBtn.style.width = '';
        nextBtn.title = 'Next Slide (→ / Space / Enter)';
      }
      if (navNext) {
        navNext.disabled = false;
      }
    } else {
      var nextDeckInfo = getNextDeckInfo();
      if (nextDeckInfo) {
        if (nextBtn) {
          nextBtn.disabled = false;
          nextBtn.innerHTML = '<span style="display:inline-flex; align-items:center; gap:6px; font-weight:700; font-size:0.85rem; padding:0 10px; white-space:nowrap;">Next: ' + nextDeckInfo.shortTitle + ' <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg></span>';
          nextBtn.style.width = 'auto';
          nextBtn.title = 'Advance to ' + nextDeckInfo.title + ' (→ / Space / Enter)';
        }
        if (navNext) {
          navNext.disabled = false;
        }
      } else {
        if (nextBtn) {
          nextBtn.disabled = true;
          nextBtn.innerHTML = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>';
          nextBtn.style.width = '';
          nextBtn.title = 'End of Ceremony';
        }
        if (navNext) {
          navNext.disabled = true;
        }
      }
    }

    var curHeading = document.getElementById('currentSlideTitle');
    if (curHeading && slides[currentIndex]) {
      curHeading.textContent = slides[currentIndex].title || ('Slide ' + (currentIndex + 1));
    }

    var nextLbl = document.getElementById('nextSlideLabel');
    if (!nextLbl) {
      var nextHeader = document.querySelector('.presenter-next-wrapper .pane-header');
      if (nextHeader) {
        nextLbl = document.createElement('span');
        nextLbl.id = 'nextSlideLabel';
        nextLbl.className = 'live-badge';
        nextHeader.appendChild(nextLbl);
      }
    }

    if (nextLbl) {
      if (nextIndex < slides.length) {
        nextLbl.textContent = 'Slide ' + (nextIndex + 1);
        nextLbl.style.background = '';
        nextLbl.style.color = '';
        nextLbl.style.borderColor = '';
      } else {
        var upcomingDeck = getNextDeckInfo();
        if (upcomingDeck) {
          nextLbl.textContent = 'Next Deck · ' + upcomingDeck.shortTitle;
          nextLbl.style.background = 'rgba(74, 222, 128, 0.2)';
          nextLbl.style.color = '#4ade80';
          nextLbl.style.border = '1px solid rgba(74, 222, 128, 0.5)';
        } else {
          nextLbl.textContent = 'End of Ceremony';
          nextLbl.style.background = 'rgba(239, 68, 68, 0.2)';
          nextLbl.style.color = '#f87171';
          nextLbl.style.border = '1px solid rgba(239, 68, 68, 0.4)';
        }
      }
    }

    var notes = document.getElementById('slideNotesContent') || document.getElementById('presenterNotesBody');
    if (notes && slides[currentIndex]) {
      var cur = slides[currentIndex];
      var html = '<strong>' + (cur.title || 'Slide ' + (currentIndex + 1)) + '</strong>';
      if (cur.category) html += '<br><span style="color:var(--pres-gold, #FAC611);">' + cur.category + '</span>';
      if (cur.subtitle) html += '<br><span style="color:#A0A6B5;">' + cur.subtitle + '</span>';
      if (cur.department) html += '<br><span style="color:#D49000; font-size:0.85rem;">' + cur.department + '</span>';
      if (Array.isArray(cur.citations) && cur.citations.length > 0) {
        html += '<br><div style="margin-top:4px; font-size:0.8rem; color:#CCD1DE;">Citations: ' + cur.citations.join(' · ') + '</div>';
      }
      if (currentIndex === 0) {
        var prevDeckNotice = getPrevDeckInfo();
        if (prevDeckNotice) {
          html += '<div style="margin-top:14px; padding:10px 12px; background:rgba(96, 165, 250, 0.12); border:1px solid rgba(96, 165, 250, 0.4); border-radius:8px; color:#60a5fa; font-size:0.84rem; line-height:1.4;">' +
            '<strong>⏪ CONTINUITY READY:</strong> First slide of this deck.<br>' +
            '<span style="color:#CCD1DE;">Pressing <strong>Prev (←)</strong> will navigate Presenter Console & Projector to <strong>' + prevDeckNotice.title + '</strong>.</span>' +
          '</div>';
        }
      }
      if (nextIndex >= slides.length) {
        var nextDeckNotice = getNextDeckInfo();
        if (nextDeckNotice) {
          html += '<div style="margin-top:14px; padding:10px 12px; background:rgba(74, 222, 128, 0.12); border:1px solid rgba(74, 222, 128, 0.4); border-radius:8px; color:#4ade80; font-size:0.84rem; line-height:1.4;">' +
            '<strong>⏩ CONTINUITY READY:</strong> Final slide of this deck.<br>' +
            '<span style="color:#CCD1DE;">Pressing <strong>Next (→)</strong> will seamlessly advance Presenter Console & Projector to <strong>' + nextDeckNotice.title + '</strong>.</span>' +
          '</div>';
        }
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
      var rawHash = window.location.hash.replace('#', '').trim();
      if (rawHash === 'last') {
        currentIndex = Math.max(0, slides.length - 1);
      } else {
        var hashVal = parseInt(rawHash, 10);
        if (!isNaN(hashVal) && hashVal >= 0 && hashVal < slides.length) {
          currentIndex = hashVal;
        }
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
          if (nIdx < slides.length) {
            if (nextFrame.contentWindow && nextFrame.contentWindow.PresentationEngine) {
              nextFrame.contentWindow.PresentationEngine.goToSlide(nIdx);
            }
          } else {
            // Next deck preview loads at slide 0
            if (nextFrame.contentWindow && nextFrame.contentWindow.PresentationEngine) {
              nextFrame.contentWindow.PresentationEngine.goToSlide(0);
            }
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

  function clearSearch() {
    closeSearch();
  }

  function toggleBlackout() {
    syncToProjector('TOGGLE_BLACKOUT');
  }

  function adjustNotesZoom(delta) {
    if (typeof window === 'undefined') return;
    var notes = document.getElementById('presenterNotesBody') || document.getElementById('slideNotesContent');
    if (notes) {
      var currentSize = parseFloat(window.getComputedStyle ? window.getComputedStyle(notes).fontSize : '16') || 16;
      notes.style.fontSize = Math.max(12, Math.min(32, currentSize + (delta || 1) * 2)) + 'px';
    }
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
    navigateNext: next,
    navigatePrev: prev,
    clearSearch: clearSearch,
    toggleBlackout: toggleBlackout,
    adjustNotesZoom: adjustNotesZoom,
    openProjectorWindow: openProjectorWindow,
    toggleTimer: toggleTimer,
    resetTimer: resetTimer,
    triggerConfetti: triggerConfetti,
    triggerSound: triggerSound,
    getCurrentIndex: function () { return currentIndex; },
    getSlides: function () { return slides; },
    getCurrentDeckLocation: getCurrentDeckLocation,
    getNextDeckInfo: getNextDeckInfo,
    getPrevDeckInfo: getPrevDeckInfo,
    advanceToNextDeck: advanceToNextDeck,
    advanceToPrevDeck: advanceToPrevDeck,
    SUITE_SEQUENCES: SUITE_SEQUENCES
  };

  if (typeof window !== 'undefined') {
    window.PresenterConsoleApp = app;
  }
})();

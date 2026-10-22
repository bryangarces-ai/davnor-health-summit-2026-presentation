(function () {
  'use strict';

  var slides = (window.SLIDES_DATA && Array.isArray(window.SLIDES_DATA)) ? window.SLIDES_DATA : [];
  var currentIndex = 0;
  var isDrawerOpen = false;
  var isSoundEnabled = false;
  var isPetalsActive = true;
  var audioCtx = null;
  var particles = [];
  var confettiParticles = [];

  function initAudio() {
    if (!audioCtx && (window.AudioContext || window.webkitAudioContext)) {
      var AudioConstructor = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioConstructor();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  function playChime() {
    if (!isSoundEnabled) return;
    try {
      initAudio();
      if (!audioCtx) return;

      var now = audioCtx.currentTime;
      var notes = [587.33, 880.00, 1174.66]; // D5, A5, D6 harmonic chime
      notes.forEach(function (freq, i) {
        var osc = audioCtx.createOscillator();
        var gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.08);

        gain.gain.setValueAtTime(0, now + i * 0.08);
        gain.gain.linearRampToValueAtTime(0.18, now + i * 0.08 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.08 + 1.2);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start(now + i * 0.08);
        osc.stop(now + i * 0.08 + 1.3);
      });
    } catch (e) {
      // Audio playback fails silently if restricted
    }
  }

  function getCurrentIndex() {
    return currentIndex;
  }

  function goToSlide(index) {
    if (slides.length === 0) return;
    var target = Math.max(0, Math.min(index, slides.length - 1));
    var changed = (target !== currentIndex);
    currentIndex = target;

    renderCurrentSlide();
    updateControls();

    if (changed) {
      playChime();
    }
  }

  function next() {
    goToSlide(currentIndex + 1);
  }

  function prev() {
    goToSlide(currentIndex - 1);
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  function toggleDrawer(forceState) {
    var modal = document.getElementById('drawerModal');
    if (!modal) return;

    if (typeof forceState === 'boolean') {
      isDrawerOpen = forceState;
    } else {
      isDrawerOpen = !isDrawerOpen;
    }

    if (isDrawerOpen) {
      modal.classList.add('open');
      renderDrawerGrid();
      var input = document.getElementById('drawerSearch');
      if (input) {
        input.value = '';
        setTimeout(function () { input.focus(); }, 100);
      }
    } else {
      modal.classList.remove('open');
    }
  }

  function toggleSound() {
    isSoundEnabled = !isSoundEnabled;
    if (isSoundEnabled) {
      initAudio();
      playChime();
    }
    updateSoundBtn();
  }

  function updateSoundBtn() {
    var btn = document.getElementById('soundToggleBtn');
    if (!btn) return;
    btn.innerHTML = isSoundEnabled
      ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>'
      : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>';
  }

  function getLogosHtml() {
    var logos = window.OFFICIAL_LOGOS;
    if (!logos || !Array.isArray(logos) || logos.length === 0) {
      return '';
    }
    return [
      '<div class="official-logos-bar">',
      logos.map(function (src) {
        return '<img src="' + escapeHtml(src) + '" alt="Official Logo" class="official-logo-img" onerror="this.style.display=\'none\'" />';
      }).join(''),
      '</div>'
    ].join('');
  }

  function renderCurrentSlide() {
    var viewport = document.getElementById('slideViewport');
    if (!viewport || !slides[currentIndex]) return;

    var s = slides[currentIndex];
    var html = '';
    var logosHtml = getLogosHtml();

    if (s.type === 'title') {
      html = [
        '<div class="slide active">',
        '  <div class="award-card">',
        logosHtml,
        '    <div class="title-event-header">' + escapeHtml(s.subEvent || 'Province of Davao del Norte') + '</div>',
        '    <h1 class="title-main-heading"><span>' + escapeHtml(s.title) + '</span></h1>',
        '    <div class="title-category-badge">' + escapeHtml(s.category) + '</div>',
        '    <div class="ceremonial-divider">',
        '      <svg viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>',
        '    </div>',
        '    <p class="title-citation">"' + escapeHtml(s.citation || '') + '"</p>',
        '  </div>',
        '</div>'
      ].join('');
    } else if (s.type === 'closing') {
      html = [
        '<div class="slide active">',
        '  <div class="award-card">',
        logosHtml,
        '    <h1 class="closing-heading">' + escapeHtml(s.title) + '</h1>',
        '    <div class="closing-sub">' + escapeHtml(s.subtitle || 'CONGRATULATIONS') + '</div>',
        '    <div class="ceremonial-divider">',
        '      <svg viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>',
        '    </div>',
        '    <p class="closing-citation">"' + escapeHtml(s.citation || '') + '"</p>',
        '  </div>',
        '</div>'
      ].join('');
    } else {
      var categoryTag = s.category ? '<div class="awardee-category-tag">' + escapeHtml(s.category) + '</div>' : '';

      html = [
        '<div class="slide active">',
        '  <div class="award-card">',
        logosHtml,
        categoryTag,
        '    <h1 class="awardee-name">' + escapeHtml(s.title) + '</h1>',
        '    <div class="ceremonial-divider">',
        '      <svg viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>',
        '    </div>',
        '    <div class="awardee-subtitle">' + escapeHtml(s.subtitle || '') + '</div>',
        '  </div>',
        '</div>'
      ].join('');
    }

    viewport.innerHTML = html;
  }

  function updateControls() {
    var counter = document.getElementById('slideCounter');
    if (counter) {
      var cur = currentIndex + 1;
      var curStr = cur < 10 ? '0' + cur : '' + cur;
      var totalStr = slides.length < 10 ? '0' + slides.length : '' + slides.length;
      counter.textContent = curStr + ' / ' + totalStr;
    }

    var progressBar = document.getElementById('progressBar');
    if (progressBar && slides.length > 1) {
      var pct = (currentIndex / (slides.length - 1)) * 100;
      progressBar.style.width = pct + '%';
    }
  }

  function renderDrawerGrid(query) {
    var grid = document.getElementById('drawerGrid');
    if (!grid) return;

    var filter = (query || '').toLowerCase().trim();
    var filtered = slides.filter(function (s) {
      if (!filter) return true;
      var matchTitle = s.title && s.title.toLowerCase().indexOf(filter) !== -1;
      var matchSub = s.subtitle && s.subtitle.toLowerCase().indexOf(filter) !== -1;
      var matchCat = s.category && s.category.toLowerCase().indexOf(filter) !== -1;
      return matchTitle || matchSub || matchCat;
    });

    if (filtered.length === 0) {
      grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--slate-subtext);">No awardees found matching "' + escapeHtml(filter) + '"</div>';
      return;
    }

    grid.innerHTML = filtered.map(function (s) {
      var numLabel = s.type === 'title' ? 'START' : (s.type === 'closing' ? 'FINALE' : (s.categoryTag || 'AWARDEE'));
      var isActive = s.id === currentIndex ? ' active' : '';
      return [
        '<div class="drawer-card' + isActive + '" onclick="window.PresentationEngine.goToSlide(' + s.id + '); window.PresentationEngine.toggleDrawer(false);">',
        '  <div>',
        '    <div class="drawer-card-num">' + numLabel + '</div>',
        '    <div class="drawer-card-title">' + escapeHtml(s.title) + '</div>',
        '  </div>',
        '  <div class="drawer-card-sub">' + escapeHtml(s.subtitle || s.category || '') + '</div>',
        '</div>'
      ].join('');
    }).join('');
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function triggerConfetti() {
    for (var i = 0; i < 90; i++) {
      confettiParticles.push({
        x: window.innerWidth * (0.3 + Math.random() * 0.4),
        y: window.innerHeight * 0.7,
        vx: (Math.random() - 0.5) * 16,
        vy: -Math.random() * 14 - 6,
        size: Math.random() * 9 + 5,
        color: ['#D81B60', '#1E88E5', '#D4AF37', '#F48FB1', '#81D4FA', '#FFD54F'][Math.floor(Math.random() * 6)],
        rotation: Math.random() * 360,
        vr: (Math.random() - 0.5) * 12,
        alpha: 1,
        life: 0
      });
    }
  }

  function setupCanvas() {
    var canvas = document.getElementById('petalsCanvas');
    if (!canvas || !canvas.getContext) return;

    var ctx = canvas.getContext('2d');
    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    // Create 30 drifting petals
    particles = [];
    for (var i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 12 + 8,
        speedY: Math.random() * 1.2 + 0.6,
        speedX: Math.random() * 1 - 0.5,
        angle: Math.random() * Math.PI * 2,
        angularSpeed: Math.random() * 0.02 - 0.01,
        color: ['rgba(240, 98, 146, 0.55)', 'rgba(248, 187, 208, 0.65)', 'rgba(100, 181, 246, 0.5)'][Math.floor(Math.random() * 3)]
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (isPetalsActive) {
        particles.forEach(function (p) {
          p.y += p.speedY;
          p.x += Math.sin(p.angle) * 0.8 + p.speedX;
          p.angle += p.angularSpeed;

          if (p.y > canvas.height + 20) {
            p.y = -20;
            p.x = Math.random() * canvas.width;
          }
          if (p.x > canvas.width + 20) p.x = -20;
          if (p.x < -20) p.x = canvas.width + 20;

          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.angle);
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size, p.size * 0.6, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        });
      }

      // Animate celebratory confetti
      for (var j = confettiParticles.length - 1; j >= 0; j--) {
        var cp = confettiParticles[j];
        cp.x += cp.vx;
        cp.y += cp.vy;
        cp.vy += 0.35; // gravity
        cp.rotation += cp.vr;
        cp.life++;

        if (cp.life > 140) {
          cp.alpha -= 0.03;
        }

        if (cp.alpha <= 0 || cp.y > canvas.height + 30) {
          confettiParticles.splice(j, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, cp.alpha);
        ctx.translate(cp.x, cp.y);
        ctx.rotate((cp.rotation * Math.PI) / 180);
        ctx.fillStyle = cp.color;
        ctx.fillRect(-cp.size / 2, -cp.size / 2, cp.size, cp.size * 0.7);
        ctx.restore();
      }

      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  }

  function setupEventListeners() {
    document.addEventListener('keydown', function (e) {
      var searchInput = document.getElementById('drawerSearch');
      if (document.activeElement === searchInput) {
        if (e.key === 'Escape') {
          toggleDrawer(false);
        }
        return;
      }

      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
        case 'Enter':
        case 'PageDown':
          e.preventDefault();
          next();
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'PageUp':
        case 'Backspace':
          e.preventDefault();
          prev();
          break;
        case 'Home':
          e.preventDefault();
          goToSlide(0);
          break;
        case 'End':
          e.preventDefault();
          goToSlide(slides.length - 1);
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          toggleFullscreen();
          break;
        case 'g':
        case 'G':
        case 'Escape':
          e.preventDefault();
          toggleDrawer();
          break;
        case 'c':
        case 'C':
          e.preventDefault();
          triggerConfetti();
          break;
        case 'm':
        case 'M':
          e.preventDefault();
          toggleSound();
          break;
      }
    });

    var touchStartX = 0;
    var touchStartY = 0;
    document.addEventListener('touchstart', function (e) {
      if (e.touches && e.touches[0]) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      }
    }, { passive: true });

    document.addEventListener('touchend', function (e) {
      if (isDrawerOpen) return;
      if (e.changedTouches && e.changedTouches[0]) {
        var diffX = e.changedTouches[0].clientX - touchStartX;
        var diffY = e.changedTouches[0].clientY - touchStartY;
        if (Math.abs(diffX) > 50 && Math.abs(diffX) > Math.abs(diffY)) {
          if (diffX < 0) next();
          else prev();
        }
      }
    }, { passive: true });

    var searchInput = document.getElementById('drawerSearch');
    if (searchInput) {
      searchInput.addEventListener('input', function (e) {
        renderDrawerGrid(e.target.value);
      });
    }
  }

  function init() {
    setupCanvas();
    setupEventListeners();
    goToSlide(0);
    updateSoundBtn();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.PresentationEngine = {
    getCurrentIndex: getCurrentIndex,
    goToSlide: goToSlide,
    next: next,
    prev: prev,
    toggleFullscreen: toggleFullscreen,
    toggleDrawer: toggleDrawer,
    toggleSound: toggleSound,
    triggerConfetti: triggerConfetti
  };
})();

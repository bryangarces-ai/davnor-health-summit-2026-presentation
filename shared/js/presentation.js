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
  var isControlsLockedHidden = false;
  var controlsTimeout = null;
  var isHoveringControls = false;

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

    if (window.location && window.history && window.history.replaceState) {
      try {
        window.history.replaceState(null, '', '#' + target);
      } catch (e) {}
    }

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
      clearTimeout(controlsTimeout);
      if (document.body) document.body.classList.remove('controls-hidden');
      modal.classList.add('open');
      renderDrawerGrid();
      var input = document.getElementById('drawerSearch');
      if (input) {
        input.value = '';
        setTimeout(function () { input.focus(); }, 100);
      }
    } else {
      modal.classList.remove('open');
      resetControlsTimeout();
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

  function resetControlsTimeout() {
    if (isControlsLockedHidden) return;
    if (document.body) {
      document.body.classList.remove('controls-hidden');
    }
    clearTimeout(controlsTimeout);
    controlsTimeout = setTimeout(function () {
      if (!isDrawerOpen && !isHoveringControls && document.body) {
        document.body.classList.add('controls-hidden');
      }
    }, 2800);
  }

  function toggleControls(forceState) {
    if (typeof forceState === 'boolean') {
      isControlsLockedHidden = !forceState;
    } else {
      isControlsLockedHidden = !isControlsLockedHidden;
    }

    if (isControlsLockedHidden) {
      clearTimeout(controlsTimeout);
      if (document.body) {
        document.body.classList.add('controls-hidden');
      }
    } else {
      resetControlsTimeout();
    }
    updateHideControlsBtn();
  }

  function updateHideControlsBtn() {
    var btn = document.getElementById('hideControlsBtn');
    if (!btn) return;
    btn.setAttribute('title', isControlsLockedHidden ? 'Show Controls (H)' : 'Hide Controls for LED Stage (H)');
  }

  function injectHideButton() {
    var bar = document.getElementById('controlBar');
    if (!bar || document.getElementById('hideControlsBtn')) return;
    var btn = document.createElement('button');
    btn.id = 'hideControlsBtn';
    btn.className = 'control-btn';
    btn.setAttribute('title', 'Hide Controls for LED Stage (H)');
    btn.setAttribute('aria-label', 'Hide Controls');
    btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>';
    btn.onclick = function (e) {
      e.stopPropagation();
      toggleControls(false); // hides controls
    };
    bar.appendChild(btn);
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
    } else if (s.type === 'section') {
      var categoriesHtml = '';
      if (s.categories && Array.isArray(s.categories)) {
        categoriesHtml = [
          '<div class="section-categories-row">',
          s.categories.map(function (c) {
            return '<div class="section-category-pill">' + escapeHtml(c) + '</div>';
          }).join(''),
          '</div>'
        ].join('');
      } else if (s.subtitle) {
        var cats = s.subtitle.indexOf(' | ') !== -1 ? s.subtitle.split(' | ') : s.subtitle.split(' · ');
        categoriesHtml = [
          '<div class="section-categories-row">',
          cats.map(function (c) {
            return '<div class="section-category-pill">' + escapeHtml(c.trim()) + '</div>';
          }).join(''),
          '</div>'
        ].join('');
      }

      html = [
        '<div class="slide active">',
        '  <div class="award-card section-card">',
        logosHtml,
        s.categoryTag ? '<div class="section-badge">' + escapeHtml(s.categoryTag) + '</div>' : '',
        '    <h1 class="section-title">' + escapeHtml(s.title) + '</h1>',
        '    <div class="ceremonial-divider">',
        '      <svg viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>',
        '    </div>',
        categoriesHtml,
        '  </div>',
        '</div>'
      ].join('');
    } else {
      var citationsList = [];
      var hasExplicitCitations = Array.isArray(s.citations) && s.citations.length > 0;
      if (hasExplicitCitations) {
        citationsList = s.citations;
      } else if (typeof s.subtitle === 'string' && s.subtitle.indexOf(' | ') !== -1) {
        citationsList = s.subtitle.split(' | ').map(function (c) { return c.trim(); }).filter(Boolean);
      }

      var isMulti = citationsList.length >= 2;
      var isMany = citationsList.length >= 4;
      var cardClass = 'award-card' + (isMany ? ' award-card--multi-awards' : (isMulti ? ' award-card--few-awards' : ''));
      var gridClass = 'citations-grid ' + (isMany ? 'citations-grid--2col' : 'citations-grid--1col');
      var categoryTag = s.category ? '<div class="awardee-category-tag">' + escapeHtml(s.category) + '</div>' : '';

      var subHtml = '';
      if (hasExplicitCitations && s.subtitle) {
        subHtml = '<div class="awardee-subtitle" style="margin-bottom: clamp(0.6rem, 1.2vh, 1.2rem);">' + escapeHtml(s.subtitle) + '</div>';
      } else if (!isMulti && s.subtitle) {
        subHtml = '<div class="awardee-subtitle">' + escapeHtml(s.subtitle) + '</div>';
      }

      var contentHtml = '';
      if (isMulti) {
        contentHtml = [
          '<div class="' + gridClass + '">',
          citationsList.map(function (item) {
            var lower = item.toLowerCase();
            var isHighlight = lower.indexOf('harmonized') !== -1 ||
                              lower.indexOf('highest donation rate') !== -1 ||
                              lower.indexOf('high donation rate') !== -1;
            var pillClass = 'citation-pill' + (isHighlight ? ' citation-pill--highlight' : '');
            return '<div class="' + pillClass + '">' +
                   '  <span class="pill-star">✦</span>' +
                   '  <span class="pill-text">' + escapeHtml(item) + '</span>' +
                   '</div>';
          }).join(''),
          '</div>'
        ].join('');
      }

      var citationHtml = s.citation ? '<p class="title-citation" style="margin-top: clamp(0.6rem, 1.2vh, 1.2rem);">"' + escapeHtml(s.citation) + '"</p>' : '';

      html = [
        '<div class="slide active">',
        '  <div class="' + cardClass + '">',
        logosHtml,
        categoryTag,
        '    <h1 class="awardee-name">' + escapeHtml(s.title) + '</h1>',
        '    <div class="ceremonial-divider">',
        '      <svg viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>',
        '    </div>',
        subHtml,
        contentHtml,
        citationHtml,
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
      var matchCitations = s.citations && Array.isArray(s.citations) && s.citations.some(function (c) {
        return c.toLowerCase().indexOf(filter) !== -1;
      });
      return matchTitle || matchSub || matchCat || matchCitations;
    });

    if (filtered.length === 0) {
      grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--slate-subtext);">No awardees found matching "' + escapeHtml(filter) + '"</div>';
      return;
    }

    grid.innerHTML = filtered.map(function (s) {
      var numLabel = s.type === 'title' ? 'START' : (s.type === 'closing' ? 'FINALE' : (s.type === 'section' ? 'SECTION' : (s.categoryTag || 'AWARDEE')));
      var subText = (s.categories && Array.isArray(s.categories) ? s.categories.join(' · ') : '') || s.subtitle || s.category || '';
      var isActive = s.id === currentIndex ? ' active' : '';
      return [
        '<div class="drawer-card' + isActive + '" onclick="window.PresentationEngine.goToSlide(' + s.id + '); window.PresentationEngine.toggleDrawer(false);">',
        '  <div>',
        '    <div class="drawer-card-num">' + numLabel + '</div>',
        '    <div class="drawer-card-title">' + escapeHtml(s.title) + '</div>',
        '  </div>',
        '  <div class="drawer-card-sub">' + escapeHtml(subText) + '</div>',
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

  function drawRealPetal(ctx, p) {
    var w = p.size;
    var h = p.size * p.aspect;

    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rotation);

    // 3D perspective flip and roll
    var flipScale = Math.cos(p.flipPhase);
    var rollScale = Math.cos(p.rollPhase) * 0.85 + 0.15;
    ctx.scale(rollScale, flipScale);

    // Realistic Sakura / Blossom Petal path with notched top
    ctx.beginPath();
    ctx.moveTo(0, h * 0.5); // base (tapered stem attachment)
    ctx.bezierCurveTo(-w * 0.55, h * 0.25, -w * 0.65, -h * 0.2, -w * 0.25, -h * 0.45);
    ctx.quadraticCurveTo(0, -h * 0.38, w * 0.25, -h * 0.45); // top center petal notch
    ctx.bezierCurveTo(w * 0.65, -h * 0.2, w * 0.55, h * 0.25, 0, h * 0.5);
    ctx.closePath();

    // Dual-tone organic petal gradient
    var grad = ctx.createLinearGradient(0, h * 0.5, 0, -h * 0.5);
    if (p.variant === 0) {
      grad.addColorStop(0, 'rgba(233, 30, 99, ' + p.alpha * 0.75 + ')');   // deep rose base
      grad.addColorStop(0.5, 'rgba(244, 143, 177, ' + p.alpha * 0.7 + ')'); // sakura pink
      grad.addColorStop(1, 'rgba(255, 235, 240, ' + p.alpha * 0.65 + ')');  // soft tip
    } else if (p.variant === 1) {
      grad.addColorStop(0, 'rgba(240, 98, 146, ' + p.alpha * 0.8 + ')');
      grad.addColorStop(0.6, 'rgba(248, 187, 208, ' + p.alpha * 0.7 + ')');
      grad.addColorStop(1, 'rgba(255, 255, 255, ' + p.alpha * 0.75 + ')');
    } else {
      // Subtle sky-blue touched lilac blossom for theme harmony
      grad.addColorStop(0, 'rgba(244, 143, 177, ' + p.alpha * 0.75 + ')');
      grad.addColorStop(0.5, 'rgba(225, 190, 231, ' + p.alpha * 0.65 + ')');
      grad.addColorStop(1, 'rgba(179, 229, 252, ' + p.alpha * 0.6 + ')');
    }
    ctx.fillStyle = grad;
    ctx.fill();

    // Subtle translucent petal spine / central vein
    ctx.beginPath();
    ctx.moveTo(0, h * 0.44);
    ctx.quadraticCurveTo(w * 0.04, 0, 0, -h * 0.28);
    ctx.strokeStyle = 'rgba(255, 255, 255, ' + p.alpha * 0.45 + ')';
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.restore();
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

    function createPetal(w, h, randomY) {
      return {
        x: Math.random() * w,
        y: randomY ? Math.random() * h : -30,
        size: Math.random() * 12 + 14,       // 14px to 26px
        aspect: Math.random() * 0.35 + 1.25, // 1.25 to 1.6
        speedY: Math.random() * 0.55 + 0.65, // base fall speed
        driftX: Math.random() * 0.4 - 0.2,   // slow ambient wind
        swayPhase: Math.random() * Math.PI * 2,
        swaySpeed: Math.random() * 0.02 + 0.015,
        swayAmp: Math.random() * 1.4 + 0.8,
        flipPhase: Math.random() * Math.PI * 2,
        flipSpeed: Math.random() * 0.03 + 0.02,
        rollPhase: Math.random() * Math.PI * 2,
        rollSpeed: Math.random() * 0.02 + 0.015,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.018,
        alpha: Math.random() * 0.35 + 0.65,
        variant: Math.floor(Math.random() * 3)
      };
    }

    // Create 32 realistic fluttering petals
    particles = [];
    for (var i = 0; i < 32; i++) {
      particles.push(createPetal(canvas.width, canvas.height, true));
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (isPetalsActive) {
        particles.forEach(function (p) {
          p.swayPhase += p.swaySpeed;
          p.flipPhase += p.flipSpeed;
          p.rollPhase += p.rollSpeed;
          p.rotation += p.rotationSpeed;

          // Aerodynamic lift: petal floats slower when flat, glides down faster when edge-on
          var flatFactor = Math.abs(Math.cos(p.flipPhase));
          var currentSpeedY = p.speedY * (0.6 + 0.6 * (1 - flatFactor));
          p.y += currentSpeedY;

          // Lateral pendulum oscillation + ambient wind drift
          p.x += Math.sin(p.swayPhase) * p.swayAmp + p.driftX;

          if (p.y > canvas.height + 30) {
            Object.assign(p, createPetal(canvas.width, canvas.height, false));
          }
          if (p.x > canvas.width + 30) p.x = -30;
          if (p.x < -30) p.x = canvas.width + 30;

          drawRealPetal(ctx, p);
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
        case 'h':
        case 'H':
          e.preventDefault();
          toggleControls();
          break;
      }
    });

    var controlBar = document.getElementById('controlBar');
    if (controlBar) {
      controlBar.addEventListener('mouseenter', function () {
        isHoveringControls = true;
        clearTimeout(controlsTimeout);
      });
      controlBar.addEventListener('mouseleave', function () {
        isHoveringControls = false;
        resetControlsTimeout();
      });
    }

    document.addEventListener('mousemove', function () {
      resetControlsTimeout();
    });

    document.addEventListener('click', function () {
      if (isControlsLockedHidden) {
        toggleControls(true);
      } else {
        resetControlsTimeout();
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

  function getInitialSlideIndex() {
    try {
      if (window.location && window.location.hash) {
        var hash = window.location.hash.replace('#', '');
        var num = parseInt(hash, 10);
        if (!isNaN(num) && num >= 0 && num < slides.length) {
          return num;
        }
      }
    } catch (e) {}
    return 0;
  }

  function init() {
    setupCanvas();
    setupEventListeners();
    goToSlide(getInitialSlideIndex());
    updateSoundBtn();
    injectHideButton();
    resetControlsTimeout();
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
    triggerConfetti: triggerConfetti,
    toggleControls: toggleControls
  };
})();

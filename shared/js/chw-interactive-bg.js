/**
 * Interactive Christmas Holiday Cyber-Health Background & String Lights
 * Community Health Workers Congress 2026 — Christmas Edition
 * 
 * Features:
 * - Hanging Interactive Christmas String Lights Garland with physics-based sway & glow
 * - Crystalline 6-point falling snowflakes and gentle winter frost flurry
 * - Twinkling fairy-light constellation nodes (Pine Emerald, Ruby Red, Warm Gold)
 * - Mouse & Touch interactivity: brushing lights sways them, magnetic starlight aura
 * - Click & keypress festive Christmas firework starbursts
 * - High-DPI canvas rendering & 60fps performance optimization
 */

(function () {
  'use strict';

  function initChristmasBackground() {
    var canvas = document.getElementById('chwBackgroundCanvas') || document.getElementById('petalsCanvas');
    if (!canvas) {
      canvas = document.createElement('canvas');
      canvas.id = 'chwBackgroundCanvas';
      canvas.className = 'chw-bg-canvas';
      document.body.insertBefore(canvas, document.body.firstChild);
    }

    var ctx = canvas.getContext('2d');
    if (!ctx) return;

    var width = 0;
    var height = 0;
    var dpr = Math.min(window.devicePixelRatio || 1, 2);

    var stringLights = [];
    var snowflakes = [];
    var fairyNodes = [];
    var bursts = [];
    var mouse = { x: -9999, y: -9999, vx: 0, vy: 0, lastX: -9999, lastY: -9999, radius: 190, active: false };
    var lastTime = 0;

    var prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var snowflakeCount = prefersReducedMotion ? 40 : (window.innerWidth < 768 ? 55 : 95);
    var nodeCount = prefersReducedMotion ? 25 : (window.innerWidth < 768 ? 32 : 55);
    var connectionDist = window.innerWidth < 768 ? 110 : 145;

    // Christmas Color Palette
    var COLOR_GOLD = '255, 215, 0';       // Radiant Gold
    var COLOR_EMERALD = '16, 185, 129';   // Pine Emerald
    var COLOR_RUBY = '244, 63, 94';       // Festive Ruby / Cranberry
    var COLOR_CYAN = '0, 229, 255';       // Winter Ice Cyan
    var COLOR_AMBER = '251, 191, 36';     // Warm Starlight Amber
    var COLOR_PURPLE = '192, 132, 252';   // Sugarplum Purple
    var COLOR_SNOW = '255, 255, 255';     // Pure Snow White

    var BULB_PALETTE = [COLOR_GOLD, COLOR_RUBY, COLOR_EMERALD, COLOR_CYAN, COLOR_AMBER, COLOR_PURPLE];

    // Initialize Christmas String Lights along the top of screen
    function initStringLights() {
      stringLights = [];
      var spacing = window.innerWidth < 768 ? 38 : 46;
      var count = Math.ceil(width / spacing) + 2;
      var sagPeriod = 4; // number of bulbs per drape swag

      for (var i = 0; i < count; i++) {
        var x = (i - 0.5) * spacing;
        var swagPhase = (i % sagPeriod) / sagPeriod; // 0..1
        // Parabolic droop for natural catenary wire
        var sag = Math.sin(swagPhase * Math.PI) * 16;
        var anchorY = 12 + sag;
        var color = BULB_PALETTE[i % BULB_PALETTE.length];

        stringLights.push({
          x: x,
          anchorY: anchorY,
          length: 22,
          bulbWidth: 11,
          bulbHeight: 18,
          angle: (Math.random() - 0.5) * 0.08,
          angularVelocity: 0,
          color: color,
          twinkle: (i * 0.7) % (Math.PI * 2),
          twinkleSpeed: Math.random() * 0.05 + 0.035,
          glowMultiplier: 1.0
        });
      }
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initStringLights();
    }

    window.addEventListener('resize', resize);
    resize();

    // Create a 6-point Snowflake
    function createSnowflake(isInitial) {
      var r = Math.random();
      var kind = r < 0.35 ? 'crystal' : (r < 0.75 ? 'flurry' : 'stardust');
      var size = kind === 'crystal' ? Math.random() * 6 + 6 : (kind === 'flurry' ? Math.random() * 3 + 2 : Math.random() * 1.5 + 1);

      return {
        x: Math.random() * width,
        y: isInitial ? Math.random() * height : -20 - Math.random() * 30,
        vx: (Math.random() - 0.5) * 0.6,
        vy: Math.random() * 0.7 + (kind === 'crystal' ? 0.6 : 0.4),
        size: size,
        kind: kind,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.02,
        swayPhase: Math.random() * Math.PI * 2,
        swaySpeed: Math.random() * 0.02 + 0.01,
        swayAmp: Math.random() * 1.2 + 0.6,
        alpha: Math.random() * 0.45 + 0.5
      };
    }

    // Create a Festive Fairy Light Node (Community Health Network)
    function createFairyNode(isInitial) {
      var r = Math.random();
      var color = r < 0.45 ? COLOR_GOLD : (r < 0.75 ? COLOR_EMERALD : COLOR_RUBY);
      return {
        x: Math.random() * width,
        y: isInitial ? Math.random() * height : (Math.random() < 0.5 ? -10 : height + 10),
        vx: (Math.random() - 0.5) * (prefersReducedMotion ? 0.25 : 0.6),
        vy: (Math.random() - 0.5) * (prefersReducedMotion ? 0.25 : 0.6),
        radius: Math.random() * 2.5 + 2,
        color: color,
        twinkle: Math.random() * Math.PI * 2,
        twinkleSpeed: Math.random() * 0.04 + 0.02,
        alpha: Math.random() * 0.4 + 0.55
      };
    }

    for (var i = 0; i < snowflakeCount; i++) {
      snowflakes.push(createSnowflake(true));
    }
    for (var j = 0; j < nodeCount; j++) {
      fairyNodes.push(createFairyNode(true));
    }

    // Festive Christmas Starburst Pulse
    function triggerChristmasBurst(x, y, forcedColor) {
      var originX = x != null ? x : width / 2;
      var originY = y != null ? y : height / 2;
      var burstColor = forcedColor || COLOR_GOLD;

      // Ripple shockwave
      bursts.push({
        type: 'shockwave',
        x: originX,
        y: originY,
        radius: 10,
        maxRadius: Math.max(width, height) * 0.65,
        speed: 10,
        color: burstColor,
        alpha: 0.8
      });

      // Confetti starlight sparks
      var sparkCount = forcedColor ? 16 : 28;
      for (var s = 0; s < sparkCount; s++) {
        var angle = Math.random() * Math.PI * 2;
        var spd = Math.random() * 7 + 3;
        var pCol = forcedColor || (Math.random() < 0.4 ? COLOR_GOLD : (Math.random() < 0.5 ? COLOR_EMERALD : COLOR_RUBY));
        bursts.push({
          type: 'spark',
          x: originX,
          y: originY,
          vx: Math.cos(angle) * spd,
          vy: Math.sin(angle) * spd,
          size: Math.random() * 4 + 2,
          color: pCol,
          alpha: 1,
          decay: Math.random() * 0.02 + 0.015
        });
      }
    }

    // Mouse & Touch interactions
    window.addEventListener('mousemove', function (e) {
      if (mouse.lastX !== -9999) {
        mouse.vx = e.clientX - mouse.lastX;
        mouse.vy = e.clientY - mouse.lastY;
      }
      mouse.lastX = e.clientX;
      mouse.lastY = e.clientY;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    });

    window.addEventListener('mouseleave', function () {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
      mouse.lastX = -9999;
      mouse.lastY = -9999;
      mouse.vx = 0;
      mouse.vy = 0;
    });

    window.addEventListener('touchmove', function (e) {
      if (e.touches && e.touches[0]) {
        var tx = e.touches[0].clientX;
        var ty = e.touches[0].clientY;
        if (mouse.lastX !== -9999) {
          mouse.vx = tx - mouse.lastX;
          mouse.vy = ty - mouse.lastY;
        }
        mouse.lastX = tx;
        mouse.lastY = ty;
        mouse.x = tx;
        mouse.y = ty;
        mouse.active = true;
      }
    }, { passive: true });

    window.addEventListener('touchend', function () {
      mouse.active = false;
      mouse.vx = 0;
      mouse.vy = 0;
    });

    window.addEventListener('click', function (e) {
      // Check if user clicked near a Christmas light bulb
      var clickedBulb = null;
      for (var b = 0; b < stringLights.length; b++) {
        var l = stringLights[b];
        var bx = l.x + Math.sin(l.angle) * l.length;
        var by = l.anchorY + Math.cos(l.angle) * l.length;
        var d = Math.hypot(e.clientX - bx, e.clientY - by);
        if (d < 35) {
          clickedBulb = l;
          break;
        }
      }

      if (clickedBulb) {
        clickedBulb.angularVelocity += (Math.random() - 0.5) * 0.35;
        clickedBulb.glowMultiplier = 3.5;
        triggerChristmasBurst(e.clientX, e.clientY, clickedBulb.color);
      } else {
        triggerChristmasBurst(e.clientX, e.clientY);
      }
    });

    window.triggerChwWave = function (x, y) {
      triggerChristmasBurst(x, y);
    };

    // Draw crystalline 6-point snowflake
    function drawCrystalSnowflake(ctx, x, y, size, rotation, alpha) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.strokeStyle = 'rgba(255, 255, 255, ' + alpha + ')';
      ctx.lineWidth = 1.2;
      ctx.lineCap = 'round';

      for (var a = 0; a < 6; a++) {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, size);

        // Branchlets
        var bDist = size * 0.6;
        var bLen = size * 0.35;
        ctx.moveTo(0, bDist);
        ctx.lineTo(bLen * 0.7, bDist - bLen * 0.7);
        ctx.moveTo(0, bDist);
        ctx.lineTo(-bLen * 0.7, bDist - bLen * 0.7);

        ctx.stroke();
        ctx.rotate(Math.PI / 3);
      }
      ctx.restore();
    }

    // Draw an Individual Hanging Christmas Bulb
    function drawChristmasBulb(ctx, bulb) {
      var cosA = Math.cos(bulb.angle);
      var sinA = Math.sin(bulb.angle);

      var startX = bulb.x;
      var startY = bulb.anchorY;
      var bulbCenterX = startX + sinA * bulb.length;
      var bulbCenterY = startY + cosA * bulb.length;

      // Twinkle flicker & glow intensity
      bulb.twinkle += bulb.twinkleSpeed;
      var baseTwinkle = 0.7 + 0.3 * Math.sin(bulb.twinkle);
      var intensity = baseTwinkle * bulb.glowMultiplier;

      // 1. Draw socket cap (dark forest green cylinder)
      ctx.save();
      ctx.translate(startX, startY);
      ctx.rotate(bulb.angle);

      // Hanging little wire lead
      ctx.strokeStyle = '#052e16';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, -6);
      ctx.lineTo(0, 4);
      ctx.stroke();

      // Green socket
      ctx.fillStyle = '#064e3b';
      ctx.fillRect(-3.5, 4, 7, 6);
      ctx.strokeStyle = '#047857';
      ctx.lineWidth = 0.8;
      ctx.strokeRect(-3.5, 4, 7, 6);

      // Gold socket rim
      ctx.fillStyle = '#fbbf24';
      ctx.fillRect(-4, 9, 8, 2);
      ctx.restore();

      // 2. Draw Radiant Glow Halo (Behind Glass Bulb)
      ctx.save();
      var glowRadius = Math.max(14, 28 * intensity);
      var glow = ctx.createRadialGradient(bulbCenterX, bulbCenterY, 2, bulbCenterX, bulbCenterY, glowRadius);
      glow.addColorStop(0, 'rgba(' + bulb.color + ', ' + Math.min(1, 0.85 * intensity) + ')');
      glow.addColorStop(0.35, 'rgba(' + bulb.color + ', ' + (0.35 * intensity) + ')');
      glow.addColorStop(1, 'rgba(' + bulb.color + ', 0)');

      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(bulbCenterX, bulbCenterY, glowRadius, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // 3. Draw Pear/Teardrop Glass Bulb
      ctx.save();
      ctx.translate(bulbCenterX, bulbCenterY);
      ctx.rotate(bulb.angle);

      ctx.beginPath();
      ctx.moveTo(0, -7);
      ctx.bezierCurveTo(-5.5, -4, -6.5, 3, -4, 8);
      ctx.bezierCurveTo(-2, 11, 2, 11, 4, 8);
      ctx.bezierCurveTo(6.5, 3, 5.5, -4, 0, -7);
      ctx.closePath();

      // Translucent tinted glass body
      ctx.fillStyle = 'rgba(' + bulb.color + ', ' + Math.min(1, 0.75 + 0.25 * intensity) + ')';
      ctx.fill();

      // Glass specular highlight
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.75)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(-2, 1, 3.5, Math.PI * 0.8, Math.PI * 1.4);
      ctx.stroke();

      // Inner glowing tungsten filament
      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.arc(0, 2, 1.8 * Math.min(1.5, intensity), 0, Math.PI * 2);
      ctx.shadowColor = '#fff';
      ctx.shadowBlur = 8;
      ctx.fill();

      ctx.restore();
    }

    // Animation Loop
    function render(ts) {
      var dt = lastTime ? Math.min((ts - lastTime) / 1000, 0.1) : 0.016;
      lastTime = ts;

      ctx.clearRect(0, 0, width, height);

      // ==========================================
      // A. DRAW INTERACTIVE CHRISTMAS STRING LIGHTS
      // ==========================================
      // 1. Draw hanging garland tinsel wire across screen
      if (stringLights.length > 1) {
        ctx.strokeStyle = '#064e3b';
        ctx.lineWidth = 2.2;
        ctx.beginPath();
        ctx.moveTo(stringLights[0].x, stringLights[0].anchorY - 4);
        for (var w = 0; w < stringLights.length - 1; w++) {
          var p1 = stringLights[w];
          var p2 = stringLights[w + 1];
          var midX = (p1.x + p2.x) / 2;
          var midY = Math.max(p1.anchorY, p2.anchorY) + 3;
          ctx.quadraticCurveTo(p1.x, p1.anchorY, midX, midY);
        }
        ctx.stroke();

        // Delicate golden tinsel shimmer along wire
        ctx.strokeStyle = 'rgba(255, 215, 0, 0.35)';
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }

      // 2. Update & Draw individual bulbs with physics sway
      for (var bi = 0; bi < stringLights.length; bi++) {
        var bulb = stringLights[bi];

        // Pendulum harmonic motion
        var spring = -0.06 * bulb.angle;
        bulb.angularVelocity += spring;
        bulb.angularVelocity *= 0.94; // damping
        bulb.angle += bulb.angularVelocity;

        // Mouse proximity interaction (brushing against bulbs)
        if (mouse.active) {
          var bPosCenterX = bulb.x + Math.sin(bulb.angle) * bulb.length;
          var bPosCenterY = bulb.anchorY + Math.cos(bulb.angle) * bulb.length;
          var distToMouse = Math.hypot(mouse.x - bPosCenterX, mouse.y - bPosCenterY);

          if (distToMouse < 60) {
            // Apply tangential impulse from mouse velocity
            var impulse = (mouse.vx || 0) * 0.012;
            bulb.angularVelocity += impulse;

            // Highlight & bloom
            bulb.glowMultiplier = Math.min(2.5, bulb.glowMultiplier + 0.15);
          } else {
            bulb.glowMultiplier = Math.max(1.0, bulb.glowMultiplier - 0.03);
          }
        } else {
          bulb.glowMultiplier = Math.max(1.0, bulb.glowMultiplier - 0.03);
        }

        drawChristmasBulb(ctx, bulb);
      }

      // ==========================================
      // B. DRAW FAIRY LIGHT CONSTELLATION NETWORK
      // ==========================================
      for (var i = 0; i < fairyNodes.length; i++) {
        var n = fairyNodes[i];
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < -20) n.x = width + 20;
        else if (n.x > width + 20) n.x = -20;
        if (n.y < 35) n.y = height + 20;
        else if (n.y > height + 20) n.y = 40;

        // Mouse attraction to fairy nodes
        if (mouse.active) {
          var dxM = n.x - mouse.x;
          var dyM = n.y - mouse.y;
          var distM = Math.sqrt(dxM * dxM + dyM * dyM);
          if (distM < mouse.radius && distM > 1) {
            var force = (1 - distM / mouse.radius) * 1.6;
            n.x += (dxM / distM) * force;
            n.y += (dyM / distM) * force;

            // Golden starlight thread to cursor
            ctx.strokeStyle = 'rgba(' + COLOR_GOLD + ',' + (0.4 * (1 - distM / mouse.radius)) + ')';
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }

        // Connect nearby fairy nodes with festive garland threads
        for (var j = i + 1; j < fairyNodes.length; j++) {
          var n2 = fairyNodes[j];
          var dx = n.x - n2.x;
          var dy = n.y - n2.y;
          var dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            var connAlpha = (1 - dist / connectionDist) * 0.28;
            ctx.strokeStyle = 'rgba(' + n.color + ',' + connAlpha + ')';
            ctx.lineWidth = 1.0;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();
          }
        }

        // Render twinkling fairy node
        n.twinkle += n.twinkleSpeed;
        var tw = 0.7 + 0.45 * Math.sin(n.twinkle);

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius * tw, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(' + n.color + ',' + (n.alpha * tw) + ')';
        ctx.shadowColor = 'rgba(' + n.color + ', 0.85)';
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // ==========================================
      // C. DRAW GENTLE FALLING SNOWFLAKES
      // ==========================================
      for (var sIdx = 0; sIdx < snowflakes.length; sIdx++) {
        var s = snowflakes[sIdx];
        s.swayPhase += s.swaySpeed;
        s.rotation += s.rotSpeed;
        s.y += s.vy;
        s.x += Math.sin(s.swayPhase) * s.swayAmp + s.vx;

        // Cursor wind repulsion on snow
        if (mouse.active) {
          var dsx = s.x - mouse.x;
          var dsy = s.y - mouse.y;
          var sDist = Math.sqrt(dsx * dsx + dsy * dsy);
          if (sDist < mouse.radius * 0.75 && sDist > 1) {
            var sForce = (1 - sDist / (mouse.radius * 0.75)) * 2;
            s.x += (dsx / sDist) * sForce;
            s.y += (dsy / sDist) * sForce;
          }
        }

        // Recycle snowflake when falling off screen
        if (s.y > height + 25) {
          Object.assign(s, createSnowflake(false));
        }
        if (s.x > width + 25) s.x = -25;
        if (s.x < -25) s.x = width + 25;

        // Draw snowflake by kind
        if (s.kind === 'crystal') {
          drawCrystalSnowflake(ctx, s.x, s.y, s.size, s.rotation, s.alpha);
        } else {
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(' + COLOR_SNOW + ',' + s.alpha + ')';
          ctx.shadowColor = 'rgba(255, 255, 255, 0.7)';
          ctx.shadowBlur = 6;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      // ==========================================
      // D. MOUSE FESTIVE STARLIGHT AURA
      // ==========================================
      if (mouse.active) {
        ctx.beginPath();
        var auraGrad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, mouse.radius * 0.65);
        auraGrad.addColorStop(0, 'rgba(' + COLOR_GOLD + ', 0.24)');
        auraGrad.addColorStop(0.5, 'rgba(' + COLOR_EMERALD + ', 0.08)');
        auraGrad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = auraGrad;
        ctx.arc(mouse.x, mouse.y, mouse.radius * 0.65, 0, Math.PI * 2);
        ctx.fill();
      }

      // ==========================================
      // E. UPDATE & RENDER CHRISTMAS STARBURSTS
      // ==========================================
      for (var b = bursts.length - 1; b >= 0; b--) {
        var burst = bursts[b];

        if (burst.type === 'shockwave') {
          burst.radius += burst.speed;
          burst.alpha = Math.max(0, burst.alpha - 0.014);

          ctx.strokeStyle = 'rgba(' + burst.color + ',' + burst.alpha + ')';
          ctx.lineWidth = 2.5;
          ctx.shadowColor = 'rgba(' + burst.color + ', 0.9)';
          ctx.shadowBlur = 14;
          ctx.beginPath();
          ctx.arc(burst.x, burst.y, burst.radius, 0, Math.PI * 2);
          ctx.stroke();
          ctx.shadowBlur = 0;

          if (burst.alpha <= 0 || burst.radius >= burst.maxRadius) {
            bursts.splice(b, 1);
          }
        } else if (burst.type === 'spark') {
          burst.x += burst.vx;
          burst.y += burst.vy;
          burst.vy += 0.08; // gravity
          burst.alpha -= burst.decay;

          ctx.beginPath();
          ctx.arc(burst.x, burst.y, burst.size, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(' + burst.color + ',' + Math.max(0, burst.alpha) + ')';
          ctx.shadowColor = 'rgba(' + burst.color + ', 0.9)';
          ctx.shadowBlur = 8;
          ctx.fill();
          ctx.shadowBlur = 0;

          if (burst.alpha <= 0) {
            bursts.splice(b, 1);
          }
        }
      }

      requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChristmasBackground);
  } else {
    initChristmasBackground();
  }
})();

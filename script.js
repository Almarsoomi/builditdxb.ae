/* BUILD IT CONTRACTING — under-construction page
   No storage, no dependencies. Everything in-memory. */
(function () {
  'use strict';

  // Dynamic copyright year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Count the progress label up alongside the CSS bar animation
  var progressValue = document.getElementById('progress-value');
  if (progressValue && !reduceMotion) {
    var target = 78;
    var duration = 1400; // matches .progress-fill animation
    var delay = 900;     // matches its animation-delay
    var start = null;

    var easeOut = function (t) { return 1 - Math.pow(1 - t, 3); };

    var tick = function (now) {
      if (start === null) start = now;
      var t = Math.min((now - start) / duration, 1);
      progressValue.textContent = String(Math.round(easeOut(t) * target));
      if (t < 1) requestAnimationFrame(tick);
    };

    progressValue.textContent = '0';
    setTimeout(function () { requestAnimationFrame(tick); }, delay);
  }

  // Cursor effects: copper spotlight (grid reveal) + grid parallax.
  // Desktop + motion-safe only.
  var grid = document.querySelector('.bg-grid');
  var gridLit = document.querySelector('.bg-grid-lit');
  if (!reduceMotion && window.matchMedia('(pointer: fine)').matches) {
    var targetX = -600, targetY = -600; // spotlight target (off-screen until first move)
    var curX = -600, curY = -600;       // smoothed spotlight position
    var running = false;

    var frame = function () {
      // ease the spotlight toward the cursor for a trailing "inspection light" feel
      curX += (targetX - curX) * 0.12;
      curY += (targetY - curY) * 0.12;

      var nx = targetX / window.innerWidth - 0.5;  // -0.5 .. 0.5
      var ny = targetY / window.innerHeight - 0.5;
      var parallax = 'translate(' + (nx * 8).toFixed(1) + 'px, ' + (ny * 8).toFixed(1) + 'px)';

      if (gridLit) {
        gridLit.style.setProperty('--mx', curX.toFixed(1) + 'px');
        gridLit.style.setProperty('--my', curY.toFixed(1) + 'px');
        gridLit.style.transform = parallax; // keep lit grid aligned with the base grid
      }
      if (grid) grid.style.transform = parallax;

      // stop the loop once the spotlight has settled on the cursor
      if (Math.abs(targetX - curX) > 0.5 || Math.abs(targetY - curY) > 0.5) {
        requestAnimationFrame(frame);
      } else {
        running = false;
      }
    };

    document.addEventListener('mousemove', function (e) {
      targetX = e.clientX;
      targetY = e.clientY;
      if (gridLit) gridLit.classList.add('is-on');
      if (!running) {
        running = true;
        requestAnimationFrame(frame);
      }
    });

    // fade the spotlight out when the cursor leaves the window
    document.addEventListener('mouseleave', function () {
      if (gridLit) gridLit.classList.remove('is-on');
    });
  }
})();

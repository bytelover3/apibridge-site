// APIBridge — internal landing
// Live status timestamp + smooth scroll for anchor links.

(function () {
  'use strict';

  // --- Live status timestamp (Singapore time, looks like internal monitoring)
  const tsEl = document.getElementById('status-time');
  function updateStatusTime() {
    if (!tsEl) return;
    const now = new Date();
    const sgt = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Singapore' }));
    const hh = String(sgt.getHours()).padStart(2, '0');
    const mm = String(sgt.getMinutes()).padStart(2, '0');
    const ss = String(sgt.getSeconds()).padStart(2, '0');
    tsEl.textContent = `last checked ${hh}:${mm}:${ss} SGT`;
  }
  updateStatusTime();
  setInterval(updateStatusTime, 1000);

  // --- Smooth scroll for in-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();

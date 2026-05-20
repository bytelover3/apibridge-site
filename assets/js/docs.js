// APIBridge docs — sidebar active link tracking
(function () {
  'use strict';
  const links = document.querySelectorAll('.docs-nav a[href^="#"]');
  const sections = Array.from(links)
    .map(a => document.getElementById(a.getAttribute('href').slice(1)))
    .filter(Boolean);

  function setActive() {
    const scrollY = window.scrollY + 120;
    let current = sections[0];
    for (const s of sections) {
      if (s.offsetTop <= scrollY) current = s;
    }
    if (!current) return;
    links.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current.id);
    });
  }

  let raf = 0;
  window.addEventListener('scroll', () => {
    if (raf) return;
    raf = requestAnimationFrame(() => { setActive(); raf = 0; });
  });
  setActive();
})();

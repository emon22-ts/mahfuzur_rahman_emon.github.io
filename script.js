/* ============================================================
   MAHFUZUR RAHMAN EMON — "Control Plane" portfolio · script.js
============================================================ */

// ===== THEME =====
(function () {
  const root = document.documentElement;
  let stored = null;
  try { stored = localStorage.getItem('theme'); } catch (e) {}
  if (!stored) stored = (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) ? 'light' : 'dark';
  root.setAttribute('data-theme', stored);
  const toggle = document.getElementById('theme-toggle');
  if (toggle) toggle.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });
})();

// ===== NAV: scroll state + progress =====
(function () {
  const nav = document.getElementById('nav');
  const progress = document.getElementById('scroll-progress');
  function onScroll() {
    const y = window.scrollY;
    if (nav) nav.classList.toggle('scrolled', y > 40);
    if (progress) {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// ===== MOBILE NAV =====
(function () {
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');
  if (!toggle || !links) return;
  function setBars(open) {
    const s = toggle.querySelectorAll('span');
    if (open) {
      s[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      s[1].style.opacity = '0';
      s[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else { s.forEach(x => { x.style.transform = ''; x.style.opacity = ''; }); }
  }
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    setBars(open);
  });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    links.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); setBars(false);
  }));
})();

// ===== SCROLL REVEAL =====
(function () {
  const reveals = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) { reveals.forEach(el => el.classList.add('visible')); return; }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });
  reveals.forEach(el => obs.observe(el));
  document.querySelectorAll('.svc-grid, .matrix, .edu-grid').forEach(g => {
    g.querySelectorAll('.reveal').forEach((el, i) => { el.style.transitionDelay = (i * 0.07) + 's'; });
  });
})();

// ===== ACTIVE NAV LINK =====
(function () {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => { if (window.scrollY >= sec.offsetTop - 130) current = sec.id; });
    links.forEach(l => { l.style.color = l.getAttribute('href') === '#' + current ? 'var(--accent)' : ''; });
  }, { passive: true });
})();

// ===== HERO LOAD STAGGER =====
window.addEventListener('load', () => {
  document.querySelectorAll('.hero .reveal').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 120 + i * 110);
  });
});

// ===== COPY EMAIL =====
(function () {
  const btn = document.getElementById('copy-email');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const text = btn.getAttribute('data-copy');
    const show = () => {
      btn.classList.add('done'); const old = btn.textContent; btn.textContent = 'Copied ✓';
      setTimeout(() => { btn.textContent = old; btn.classList.remove('done'); }, 1500);
    };
    try { navigator.clipboard.writeText(text).then(show).catch(sel); } catch (e) { sel(); }
    function sel() {
      const n = document.querySelector('.contact-email');
      if (n) { const r = document.createRange(); r.selectNodeContents(n); const s = getSelection(); s.removeAllRanges(); s.addRange(r); }
      show();
    }
  });
})();

console.log('%c~/emon', 'color:#4cc2ff;font-family:monospace;font-size:1.1rem;font-weight:bold;');
console.log('%cBuilt by Mahfuzur Rahman Emon — mahfuzur.emon01@gmail.com', 'color:#8b97a6;font-family:monospace;font-size:.85rem;');

/* ============================================================
   MAHFUZUR RAHMAN EMON — Portfolio · script.js
============================================================ */

// ===== THEME TOGGLE =====
(function () {
  const root = document.documentElement;
  let stored = null;
  try { stored = localStorage.getItem('theme'); } catch (e) {}
  if (!stored) {
    stored = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
  root.setAttribute('data-theme', stored);

  const toggle = document.getElementById('theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }
})();

// ===== CUSTOM CURSOR (fine pointers only) =====
(function () {
  if (!window.matchMedia || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  const cursor = document.getElementById('cursor');
  const dot = document.getElementById('cursor-dot');
  if (!cursor || !dot) return;
  let mx = 0, my = 0, cx = 0, cy = 0;
  document.addEventListener('mousemove', (e) => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px'; dot.style.top = my + 'px';
  });
  (function loop() {
    cx += (mx - cx) * 0.16; cy += (my - cy) * 0.16;
    cursor.style.left = cx + 'px'; cursor.style.top = cy + 'px';
    requestAnimationFrame(loop);
  })();
  document.querySelectorAll('a, button, .project-card, .feature-card').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
  });
})();

// ===== NAV: scroll state + progress bar =====
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
    } else {
      s.forEach(x => { x.style.transform = ''; x.style.opacity = ''; });
    }
  }
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    setBars(open);
  });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    links.classList.remove('open'); setBars(false);
  }));
})();

// ===== SCROLL REVEAL =====
(function () {
  const reveals = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    reveals.forEach(el => el.classList.add('visible')); return;
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); obs.unobserve(entry.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });
  reveals.forEach(el => obs.observe(el));

  // stagger grid children
  document.querySelectorAll('.projects-grid, .skills-grid, .edu-grid').forEach(grid => {
    grid.querySelectorAll('.reveal').forEach((el, i) => { el.style.transitionDelay = (i * 0.09) + 's'; });
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

// ===== HERO PARALLAX =====
(function () {
  const bg = document.querySelector('.hero-bg-text');
  if (!bg) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  window.addEventListener('scroll', () => {
    bg.style.transform = `translate(-50%, calc(-50% + ${window.scrollY * 0.25}px))`;
  }, { passive: true });
})();

// ===== HERO LOAD STAGGER =====
window.addEventListener('load', () => {
  document.querySelectorAll('.hero .reveal').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 150 + i * 130);
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
      const r = document.createRange(); const n = document.querySelector('.contact-email');
      if (n) { r.selectNodeContents(n); const s = getSelection(); s.removeAllRanges(); s.addRange(r); }
      show();
    }
  });
})();

// ===== CONSOLE =====
console.log('%c👋 Hey there!', 'color:#f0c24b;font-size:1.1rem;font-weight:bold;');
console.log('%cBuilt by Mahfuzur Rahman Emon — mahfuzur.emon01@gmail.com', 'color:#888;font-size:.9rem;');

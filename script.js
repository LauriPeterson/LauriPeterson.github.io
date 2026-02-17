/* ─── YEAR ───────────────────────────────────────────────── */
document.getElementById('year').textContent = new Date().getFullYear();

/* ─── NAV SCROLL SHADOW ──────────────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* ─── MOBILE MENU ────────────────────────────────────────── */
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu  = document.getElementById('closeMenu');
const mobLinks   = document.querySelectorAll('.mob-link');

hamburger.addEventListener('click', () => mobileMenu.classList.add('open'));
closeMenu.addEventListener('click', () => mobileMenu.classList.remove('open'));
mobLinks.forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

/* ─── SCROLL-REVEAL SECTIONS ─────────────────────────────── */
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.07 }
);
sections.forEach(s => observer.observe(s));

/* ─── SMOOTH ACTIVE NAV LINK ─────────────────────────────── */
const navAnchors = document.querySelectorAll('.nav-links a');
const sectionEls = document.querySelectorAll('section[id]');

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navAnchors.forEach(a => a.classList.remove('active'));
        const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);
sectionEls.forEach(s => navObserver.observe(s));

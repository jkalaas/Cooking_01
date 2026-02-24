/**
 * main.js — App entry point
 *
 * - Loads the shared header component
 * - Initialises the sticky nav scroll effect
 * - Initialises the recipe grid on the homepage
 * - Initialises the recipe detail view on the detail page
 * - Initialises the Add Recipe modal wherever the trigger exists
 */

document.addEventListener('DOMContentLoaded', async () => {
  /* Compute root path so this works from / and from /pages/ */
  const inSubDir = window.location.pathname.includes('/pages/');
  const root = inSubDir ? '../' : '';
  await loadComponent('#site-header', root + 'components/header.html');

  initStickyNav();
  initMobileNav();
  initHeroBg();

  initRecipeGrid();
  initRecipeDetail();
  initAddRecipe();
});

/* ── Component loader ── */
async function loadComponent(selector, url) {
  const el = document.querySelector(selector);
  if (!el) return;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`${url}: ${res.status}`);
    el.innerHTML = await res.text();
  } catch (err) {
    console.error('loadComponent:', err);
  }
}

/* ── Sticky nav ── */
function initStickyNav() {
  const observer = new IntersectionObserver(
    ([entry]) => {
      const nav = document.querySelector('.site-nav');
      if (nav) nav.classList.toggle('scrolled', !entry.isIntersecting);
    },
    { threshold: 0, rootMargin: '-72px 0px 0px 0px' }
  );

  const sentinel = document.getElementById('nav-sentinel');
  if (sentinel) observer.observe(sentinel);
}

/* ── Mobile nav toggle ── */
function initMobileNav() {
  document.addEventListener('click', e => {
    const toggle = e.target.closest('.nav-toggle');
    if (!toggle) return;
    const links = document.querySelector('.site-nav__links');
    links?.classList.toggle('open');
  });
}

/* ── Hero background ── */
function initHeroBg() {
  const bg = document.querySelector('.hero__bg');
  if (!bg) return;
  requestAnimationFrame(() => bg.classList.add('loaded'));

  /* If the user has run download-images.sh, prefer the local JPG over the CDN URL */
  const probe = new Image();
  probe.onload = () => {
    bg.style.backgroundImage = "url('assets/images/hero-background.jpg')";
  };
  probe.src = 'assets/images/hero-background.jpg';
}

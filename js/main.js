/**
 * js/main.js — App entry point
 *
 * Bootstraps the application once the DOM is ready.
 * - Loads shared components (header, footer) into their mount points.
 * - Initialises page-specific modules from js/components/.
 */

document.addEventListener('DOMContentLoaded', () => {
  loadComponent('#site-header', '/components/header.html');
});

/**
 * Fetches an HTML snippet and injects it into the given selector.
 * @param {string} selector - CSS selector for the mount element.
 * @param {string} url      - Path to the HTML component file.
 */
async function loadComponent(selector, url) {
  const el = document.querySelector(selector);
  if (!el) return;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to load ${url}: ${res.status}`);
    el.innerHTML = await res.text();
  } catch (err) {
    console.error(err);
  }
}

/**
 * recipe-detail-view.js
 * Reads the ?id= query param, finds the matching recipe, and renders
 * the full detail page.
 */

import { recipes as builtIn } from './recipe-data.js';

export function initRecipeDetail() {
  const container = document.getElementById('recipe-detail');
  if (!container) return;

  const id = new URLSearchParams(window.location.search).get('id');
  const recipe = findRecipe(id);

  if (!recipe) {
    renderNotFound(container);
    return;
  }

  document.title = `${recipe.title} — La Marée`;
  renderDetail(recipe);
}

function findRecipe(id) {
  if (!id) return null;
  const all = [
    ...builtIn,
    ...JSON.parse(localStorage.getItem('customRecipes') || '[]'),
  ];
  return all.find(r => r.id === id) || null;
}

function renderDetail(r) {
  /* Hero */
  document.getElementById('detail-hero-image').src = r.detailImage || r.image;
  document.getElementById('detail-hero-image').alt = r.title;
  document.getElementById('detail-hero-category').textContent = r.category;
  document.getElementById('detail-hero-title').textContent = r.title;
  document.getElementById('detail-hero-subtitle').textContent = r.subtitle || '';

  /* Meta sidebar */
  document.getElementById('meta-time').textContent = r.time;
  document.getElementById('meta-difficulty').textContent = r.difficulty;
  document.getElementById('meta-serves').textContent = r.serves;

  /* Ingredients */
  const ingList = document.getElementById('ingredients-list');
  ingList.innerHTML = r.ingredients
    .map(i => `<li>${escHtml(i)}</li>`)
    .join('');

  /* Description */
  document.getElementById('detail-description').textContent = r.description;

  /* Steps */
  const stepsList = document.getElementById('steps-list');
  stepsList.innerHTML = r.steps
    .map(
      (s, i) => `
      <li class="step">
        <span class="step__number">${String(i + 1).padStart(2, '0')}</span>
        <p class="step__text">${escHtml(s)}</p>
      </li>`
    )
    .join('');

  /* Chef note */
  const noteSection = document.getElementById('chef-note-section');
  if (r.chefNote) {
    document.getElementById('chef-note-text').textContent = r.chefNote;
    noteSection.hidden = false;
  } else {
    noteSection.hidden = true;
  }
}

function renderNotFound(container) {
  container.innerHTML = `
    <div class="recipe-not-found container">
      <h1>Recipe not found</h1>
      <p>The recipe you are looking for does not exist.</p>
      <a href="/" class="btn btn-dark" style="margin-top:1.5rem;display:inline-flex">← Back to home</a>
    </div>
  `;
}

function escHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

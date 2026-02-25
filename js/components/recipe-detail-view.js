/**
 * recipe-detail-view.js
 * Reads the ?id= query param, finds the matching recipe, and renders
 * the full detail page.
 */

function initRecipeDetail() {
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
    ...recipes,
    ...JSON.parse(localStorage.getItem('customRecipes') || '[]'),
  ];
  return all.find(r => r.id === id) || null;
}

function renderDetail(r) {
  /* Hero — Unsplash photo first, local SVG as offline fallback */
  const heroImg = document.getElementById('detail-hero-image');
  const remoteSrc = r.detailImage || r.image;
  const localFallback = `../assets/images/${r.id}.svg`;
  heroImg.onerror = () => { heroImg.onerror = null; heroImg.src = localFallback; };
  heroImg.src = remoteSrc;
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

/* ── Overlay (same-page recipe detail) ── */

function openRecipeOverlay(id) {
  var recipe = findRecipe(id);
  if (!recipe) return;
  renderOverlay(recipe);
  var overlay = document.getElementById('recipe-overlay');
  if (!overlay) return;
  overlay.classList.add('is-open');
  document.body.style.overflow = 'hidden';
  var closeBtn = document.getElementById('overlay-close');
  if (closeBtn) closeBtn.focus();
}

function closeRecipeOverlay() {
  var overlay = document.getElementById('recipe-overlay');
  if (!overlay) return;
  overlay.classList.remove('is-open');
  document.body.style.overflow = '';
  overlay.scrollTop = 0;
}

function renderOverlay(r) {
  var heroImg = document.getElementById('overlay-hero-image');
  var remoteSrc = r.detailImage || r.image;
  var localFallback = 'assets/images/' + r.id + '.svg';
  heroImg.onerror = function() { heroImg.onerror = null; heroImg.src = localFallback; };
  heroImg.src = remoteSrc;
  heroImg.alt = r.title;

  document.getElementById('overlay-hero-category').textContent = r.category;
  document.getElementById('overlay-title').textContent = r.title;
  document.getElementById('overlay-hero-subtitle').textContent = r.subtitle || '';

  document.getElementById('overlay-meta-time').textContent = r.time;
  document.getElementById('overlay-meta-difficulty').textContent = r.difficulty;
  document.getElementById('overlay-meta-serves').textContent = r.serves;

  var ingList = document.getElementById('overlay-ingredients-list');
  ingList.innerHTML = r.ingredients.map(function(i) { return '<li>' + escHtml(i) + '</li>'; }).join('');

  document.getElementById('overlay-description').textContent = r.description;

  var stepsList = document.getElementById('overlay-steps-list');
  stepsList.innerHTML = r.steps.map(function(s, i) {
    return '<li class="step"><span class="step__number">' + String(i + 1).padStart(2, '0') + '</span><p class="step__text">' + escHtml(s) + '</p></li>';
  }).join('');

  var noteSection = document.getElementById('overlay-chef-note-section');
  if (r.chefNote) {
    document.getElementById('overlay-chef-note-text').textContent = r.chefNote;
    noteSection.hidden = false;
  } else {
    noteSection.hidden = true;
  }
}

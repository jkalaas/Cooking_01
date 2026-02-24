/**
 * recipe-grid.js
 * Renders recipe cards into #recipe-grid on the homepage.
 * Merges built-in recipes with any stored in localStorage.
 */

function initRecipeGrid() {
  const grid = document.getElementById('recipe-grid');
  if (!grid) return;

  const all = [...recipes, ...getStoredRecipes()];
  grid.innerHTML = all.map(recipeCardHTML).join('');
}

function recipeCardHTML(recipe) {
  const detailUrl = `/pages/recipe-detail.html?id=${recipe.id}`;
  return `
    <article class="recipe-card">
      <a class="recipe-card__link" href="${detailUrl}" aria-label="${recipe.title}">
        <div class="recipe-card__image-wrap">
          <img
            class="recipe-card__image"
            src="${recipe.image}"
            alt="${recipe.title}"
            loading="lazy"
          />
          <span class="recipe-card__category">${recipe.category}</span>
        </div>
        <div class="recipe-card__body">
          <h2 class="recipe-card__title">${recipe.title}</h2>
          <p class="recipe-card__subtitle">${recipe.subtitle || ''}</p>
          <p class="recipe-card__description">${recipe.description}</p>
          <div class="recipe-card__meta">
            <span class="recipe-card__meta-item">
              ${clockIcon()}
              ${recipe.time}
            </span>
            <span class="recipe-card__meta-item">
              ${chefIcon()}
              ${recipe.difficulty}
            </span>
            <span class="recipe-card__meta-item">
              ${servesIcon()}
              Serves ${recipe.serves}
            </span>
          </div>
        </div>
      </a>
    </article>
  `.trim();
}

function getStoredRecipes() {
  try {
    return JSON.parse(localStorage.getItem('customRecipes') || '[]');
  } catch {
    return [];
  }
}

/* Inline SVG icons (no external dependency) */
function clockIcon() {
  return `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`;
}

function chefIcon() {
  return `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"/><line x1="6" y1="17" x2="18" y2="17"/></svg>`;
}

function servesIcon() {
  return `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`;
}

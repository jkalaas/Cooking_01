/**
 * add-recipe.js
 * Handles the "Add Recipe" modal — open/close, form validation,
 * and persisting new recipes to localStorage.
 */

import { initRecipeGrid } from './recipe-grid.js';

export function initAddRecipe() {
  const triggers = document.querySelectorAll('[data-open-modal="add-recipe"]');
  const backdrop = document.getElementById('add-recipe-modal');
  if (!backdrop) return;

  const closeBtn = backdrop.querySelector('.modal__close');
  const cancelBtn = backdrop.querySelector('.modal__cancel');
  const form = backdrop.querySelector('#add-recipe-form');

  /* Open */
  triggers.forEach(btn => btn.addEventListener('click', openModal));

  /* Close */
  closeBtn?.addEventListener('click', closeModal);
  cancelBtn?.addEventListener('click', closeModal);
  backdrop.addEventListener('click', e => {
    if (e.target === backdrop) closeModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

  /* Submit */
  form?.addEventListener('submit', handleSubmit);

  function openModal() {
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  function handleSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));

    const recipe = {
      id: `custom-${Date.now()}`,
      title: data.title.trim(),
      subtitle: data.subtitle?.trim() || '',
      description: data.description.trim(),
      time: data.time.trim(),
      difficulty: data.difficulty,
      serves: parseInt(data.serves, 10) || 2,
      category: data.category.trim() || 'Seafood',
      image: data.image?.trim() || 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
      detailImage: data.image?.trim() || 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=80',
      ingredients: data.ingredients
        .split('\n')
        .map(l => l.trim())
        .filter(Boolean),
      steps: data.steps
        .split('\n')
        .map(l => l.trim())
        .filter(Boolean),
      chefNote: data.chef_note?.trim() || '',
    };

    saveRecipe(recipe);
    form.reset();
    closeModal();

    /* Re-render the grid if we're on the homepage */
    initRecipeGrid();

    showToast(`"${recipe.title}" has been added to the collection.`);
  }
}

function saveRecipe(recipe) {
  const stored = getStoredRecipes();
  stored.push(recipe);
  localStorage.setItem('customRecipes', JSON.stringify(stored));
}

function getStoredRecipes() {
  try {
    return JSON.parse(localStorage.getItem('customRecipes') || '[]');
  } catch {
    return [];
  }
}

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4000);
}

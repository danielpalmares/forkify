import * as model from './model';
import recipeView from './view/recipeView';
import searchView from './view/searchView';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice([1]);
    if (!id) return;

    recipeView.renderSpinner();

    // 1 *-- Loading the recipe --*
    await model.loadRecipe(id);

    // 2 *-- Rendering the recipe --*
    recipeView.render(model.state.recipe); // esse método render irá aceitar estes dados(recipe) e armazenar dentro do objeto

  } catch (error) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    // 1) Get search query
    const query = searchView.getQuery();
    if (!query) return;

    // 2) Load search results
    await model.loadSearchResults(query);

    // 3) Render results
    console.log(model.state.search.results);
  } catch (err) {
    console.log(err);
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};
init();

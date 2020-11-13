import * as model from './model';
import recipeView from './view/recipeView';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

// API => https://forkify-api.herokuapp.com/v2
// *-----------------------------------------------* //
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

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
};
init();

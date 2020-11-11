import * as model from './model';
import recipeView from './view/recipeView';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function() {
  try {
    const id = window.location.hash.slice([1]);
    if(!id) return;

    recipeView.renderSpinner();

    // 1 *-- Loading the recipe --*
    await model.loadRecipe(id);

    // 2 *-- Rendering the recipe --*
    recipeView.render(model.state.recipe); // esse render irá aceitar estes dados(recipe) e armazenar no objeto
    
  } catch (error) {
    alert(error);
  }
};

const events = ['hashchange', 'load'];
events.forEach(ev => window.addEventListener(ev, controlRecipes));
// window.addEventListener('load', controlRecipes);
// window.addEventListener('hashchange', controlRecipes);

import { API_URL } from './config';

export const state = {
  recipe: {}
}

export const loadRecipe = async function(id) {
  const res = await fetch(`${API_URL}/${id}`);
  const data = await res.json();

  if(!res.ok) throw new Error(data.message);
  console.log(res, data);

  let {recipe} = data.data;
  state.recipe = {
    id: recipe.id,
    title: recipe.title,
    publisher: recipe.publisher,
    sourceUrl: recipe.source_url,
    image: recipe.image_url,
    servings: recipe.servings,
    cookingTime: recipe.cooking_time,
    ingredients: recipe.ingredients
  }
  console.log(recipe);
}
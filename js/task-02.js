const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
console.log(ingredients)
const itemContainerEl = document.querySelector(`.ingredients`);

const makeIngredientsCard = (ingredients)=> {
  const ingredientsEl = document.createElement(`li`);
  ingredientsEl.textContent = ingredients;
  ingredientsEl.classList.add(`item`);

  return ingredientsEl;
  
};
console.log(makeIngredientsCard(ingredients[1]))


const items = ingredients.map(makeIngredientsCard);

console.log(items);
itemContainerEl.prepend(items);
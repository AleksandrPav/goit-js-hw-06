const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const refs = document.querySelector("#ingredients");
console.log(refs)
  
const createListItem = ingredients.forEach(ingredient => {
  let items = document.createElement("li");
  items.classList.add("item");
  items.innerHTML = ingredient;
  refs.append(items)
});



// const createListItem = (text) => {
//   const li = document.createElement("li");
//   li.textContent = text;
//   li.classList.add("item")
//   refs.append(item);
// }
// ingredients.map((ingredient) => createListItem(ingredient));

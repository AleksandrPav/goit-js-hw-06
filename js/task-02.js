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
  
const createListItem = ingredients.map(ingredient => {
  const items = document.createElement("li");
  items.classList.add("item");
  items.textContent = ingredient;
  return items;
});
refs.append(...createListItem);
console.log(createListItem);




// const createListItem = (text) => {
//   const li = document.createElement("li");
//   li.textContent = text;
//   li.classList.add("item")
//   refs.append(item);
// }
// ingredients.map((ingredient) => createListItem(ingredient));

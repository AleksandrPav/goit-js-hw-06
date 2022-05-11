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

const createListItem = (text) => {
  const li = document.createElement("li");
  li.textContent = text;
  li.classList.add("item")
  refs.append(li);
}
ingredients.map((ingredient) => createListItem(ingredient));

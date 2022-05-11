
const category = categories.children;
console.log(`Number of categories:`, category.length);

const menuItems = [...document.querySelectorAll(".item")];

const getItems = menuItems.forEach((element) => console.log(
    `    Category: ${element.children[0].textContent} 
    Elements: ${element.children[1].children.length}`));




// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

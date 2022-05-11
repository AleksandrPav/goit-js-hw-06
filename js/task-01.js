
const category = categories.children;
console.log(`Number of categories:`, category.length);

const refs = {
    menuItems: [...document.querySelectorAll(".item")],
}

const takeItemfirstElement = refs.menuItems.map((name) => name.firstElementChild);
const takeNameItem = takeItemfirstElement.map((nameItem) => nameItem.textContent);

const takeItemlastElementChild = refs.menuItems.map((ul) => ul.lastElementChild);
const takeLengthItem = takeItemlastElementChild.map((ulItem) => ulItem.childElementCount)

const getCategoriesNames = (names) => {
    
    let message;
    if (takeNameItem.includes(names)) {
        return message = `Category: ${names}`;
    } return message = `${names} - такої категорії не існує`
    
};




console.log(getCategoriesNames("Animals"));
console.log(getCategoriesNames("Products"));
console.log(getCategoriesNames("Technologies"));
console.log(getCategoriesNames("Animals231312"));


console.log(takeNameItem)
console.log(takeLengthItem)



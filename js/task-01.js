const category = categories.children;
console.log(`Number of categories:`, category.length);

const categoryTitle = categories.querySelectorAll(`h2`);
console.log(categoryTitle);
const elements = categories.querySelectorAll(`ul`);


const getNames = categoryTitle[0].textContent;
    
    
console.log("Масив категорій ", getNames);


const getCategoriesNames = (names) => {
    let message;
    if (getNames.includes(names)) {
        return message = `Category: ${names}`;
    } return message = `${names} - такої категорії не існує`
};

const getSumOfElements = 



console.log(getCategoriesNames('Animals'));
console.log(getCategoriesNames('Products'));
console.log(getCategoriesNames('Technologies'));
console.log(getCategoriesNames('wqreqr'));


// 1. Приймає елемент категорії;
// 2. Перевіряє чи є така категорія.
// 3. Рахує кількість елементів в цій категорії
// 4. Повертає імя категорії та кількість елементів.




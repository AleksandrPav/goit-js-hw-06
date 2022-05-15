const refs = {
  bodyBackgroundColor: document.querySelector(`body`),
  spanNameColor: document.querySelector(`.color`),
  buttonChangeColor: document.querySelector(`.change-color`)
};
// console.log()
// console.log(refs.bodyBackgroundColor)
// console.log(refs.spanNameColor)
// console.log(refs.buttonChangeColor)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const getChangeBodyColor = () => {
  refs.bodyBackgroundColor.style.backgroundColor = getRandomHexColor();
  refs.spanNameColor.textContent = refs.bodyBackgroundColor.style.backgroundColor;
};

refs.buttonChangeColor.addEventListener(`click`, getChangeBodyColor);














// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку 
// на button.change - color і виводить значення кольору в span.color.
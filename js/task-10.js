const input = document.querySelector("#controls input");
console.log(input);
console.log(input.value);

const createboxBtn = document.querySelector('[data-create=""]');
console.log(createboxBtn);

const deleteboxBtn = document.querySelector('[data-destroy=""]');
console.log(deleteboxBtn);

const boxes = document.querySelector("#boxes");
console.log(boxes);

const inputChange = (e) => {
  input.setAttribute("count", Number(e.currentTarget.value));
  console.log(Number(e.currentTarget.value));
};
input.addEventListener("input", inputChange);

let baseboxSize = 30;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

getRandomHexColor();

const createbox = () => {
  let countBox = Number(input.getAttribute("count"));
  console.log(countBox);
  for (let i = 0; i < countBox; i++) {
    baseboxSize += 10;
    const newBox = document.createElement("div");
    newBox.style.background = getRandomHexColor();
    newBox.style.height = baseboxSize + "px";
    newBox.style.width = baseboxSize + "px";
    newBox.style.margin = "10px";
    newBox.classList.add("new-box");
    boxes.append(newBox);
  }
};

createboxBtn.addEventListener("click", createbox);

const deletebox = () => {
  const allNewBoxes = document.querySelectorAll(".new-box");
  
  for (let allNewBoxe of allNewBoxes) {
    boxes.removeChild(allNewBoxe);
  }
  baseboxSize = 30;
  
};

deleteboxBtn.addEventListener("click", deletebox);
























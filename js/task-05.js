




const refs = {
    nameInput: document.querySelector(`#name-input`),
    nameOutput: document.querySelector(`#name-output`),
}
console.log(refs.nameInput.value)
console.log(refs.nameOutput.textContent)

refs.nameInput.addEventListener(`input`, getChangeSpanName);

function getChangeSpanName(event) {
    if (refs.nameInput.value === "")
    { refs.nameOutput.textContent = `Anonymous` }
    else {
        refs.nameOutput.textContent = event.currentTarget.value
    }
    
}



console.log(refs.nameInput)
console.log(refs.nameOutput)















// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input),
// підставляє його поточне значення в span#name - output.Якщо інпут порожній, у спані
// повинен відображатися рядок "Anonymous".

/* <input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1> */
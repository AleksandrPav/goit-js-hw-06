const refs = {
    inputFontSize: document.querySelector(`#font-size-control`),
    spanText: document.querySelector(`#text`),
    
};

refs.inputFontSize.addEventListener("input", changeRange);

function changeRange(event) {
    refs.spanText.style.fontSize = event.currentTarget.value + `px`;
    
};
    
    
console.log(refs.inputFontSize)
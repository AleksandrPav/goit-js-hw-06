const refs = {
    validationInput: document.querySelector(`#validation-input`),
    validLentgh: document.querySelector(`input[data-length]`),
    
};
refs.validationInput.addEventListener(`focus`, onInputFocus);
refs.validationInput.addEventListener(`blur`, onInputBlur);
function onInputFocus() { };


function onInputBlur(event) {
    if (event.currentTarget.value.length === Number(refs.validLentgh.dataset.length)) {
        refs.validationInput.classList.add(`valid`);
    } else {
        refs.validationInput.classList.add(`invalid`);
    }
 
}


// function getChangeSpanName(event) {
//     if (refs.nameInput.value === "")
//     { refs.nameOutput.textContent = `Anonymous` }
//     else {
//         refs.nameOutput.textContent = event.currentTarget.value
//     }
    
// }



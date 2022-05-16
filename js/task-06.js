const refs = {
    validationInput: document.querySelector(`#validation-input`),
    validLentgh: document.querySelector(`input[data-length]`),
    
};
refs.validationInput.addEventListener(`focus`, onInputFocus);
refs.validationInput.addEventListener(`blur`, onInputBlur);
function onInputFocus() { };


function onInputBlur(event) {
    if (event.currentTarget.value.length === Number(refs.validLentgh.dataset.length)) {
        refs.validationInput.classList.remove(`invalid`);
        refs.validationInput.classList.add(`valid`);
    } else {
        refs.validationInput.classList.remove(`valid`);
        refs.validationInput.classList.add(`invalid`);
    }
    
    
 
}




let counterValue = {
    value: 0,
    increment(){
    this.value += 1;
},
    decrement(){
    this.value -= 1;
    }

};
const decrementBtn = document.querySelector(`#counter button[data-action="decrement"]`)
const incrementBtn = document.querySelector(`#counter button[data-action="increment"]`)
const valuEl = document.querySelector("#value")

decrementBtn.addEventListener(`click`, function () {
    counterValue.decrement();
    valuEl.textContent = counterValue.value;
});
incrementBtn.addEventListener(`click`, function () {
    counterValue.increment();
    valuEl.textContent = counterValue.value;
});



console.log(valuEl)
console.log(decrementBtn)
console.log(incrementBtn)
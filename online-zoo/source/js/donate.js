const numberInputElement = document.querySelector('.donate-form__number-input');
const radioInputElements = document.querySelectorAll('.donate-form__radio-input');

//на старте отображается 100
numberInputElement.value = 100;

// при изменении выбранной суммы меняется подсвеченный радио-баттон
radioInputElements.forEach(elem => {
    elem.addEventListener('click', () => {
        numberInputElement.value = elem.value;
    })
})

// при вводе суммы в инпут подвечивается соотв. кружок
function changeDonat() {
    radioInputElements.forEach(input => {
        input.checked = false;
        if(input.value === numberInputElement.value) {
            input.checked = true;
        }
    })
}

numberInputElement.addEventListener('input', changeDonat);






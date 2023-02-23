const inputEl =document.querySelector('#validation-input');
const dataLengthInput = inputEl.dataset.length;

inputEl.addEventListener('blur', onValidationInputBlur);

function onValidationInputBlur(event) {
    inputEl.classList.toggle('valid', event.currentTarget.value.length == dataLengthInput);
    inputEl.classList.toggle('invalid', event.currentTarget.value.length != dataLengthInput);
}
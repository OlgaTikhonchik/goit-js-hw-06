const inputEl = document.querySelector('#validation-input');
const dataLengthInput = inputEl.dataset.length;

inputEl.addEventListener('blur', onValidationInputBlur);

// function onValidationInputBlur(event) {
//     inputEl.classList.toggle('valid', event.currentTarget.value.length === Number(dataLengthInput));
//     inputEl.classList.toggle('invalid', event.currentTarget.value.length !== Number(dataLengthInput));
// }

function onValidationInputBlur(event) {
  inputEl.classList =
    event.currentTarget.value.length !== Number(dataLengthInput) ? 'invalid' : 'valid';
}


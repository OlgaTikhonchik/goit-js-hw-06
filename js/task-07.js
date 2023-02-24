const inputFontSizeControlEl = document.querySelector('#font-size-control');
const textSpanEl = document.querySelector('#text');

inputFontSizeControlEl.addEventListener('input', onInputChange);

function onInputChange(event) {
  textSpanEl.style.fontSize = `${event.currentTarget.value}px`;
}

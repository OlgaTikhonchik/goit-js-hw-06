function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  spanTextColorEl: document.querySelector('.color'),
  bodyStyleEl: document.querySelector('body'),
  btnEl: document.querySelector('.change-color'),
}

refs.btnEl.addEventListener('click', onClickBtn);

function onClickBtn() {
  let color = getRandomHexColor();
  refs.bodyStyleEl.style.backgroundColor = color;
  refs.spanTextColorEl.textContent = color;
}
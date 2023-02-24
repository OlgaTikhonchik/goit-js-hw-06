function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  inputNumber: document.querySelector('input'),
  btnControlCreate: document.querySelector('button[data-create]'),
  btnControlDestroy: document.querySelector('button[data-destroy]'),
  boxesEl: document.querySelector('#boxes'),

};

refs.btnControlCreate.addEventListener('click',  () => {
  createBoxes(refs.inputNumber.value);
} );


refs.btnControlDestroy.addEventListener('click', destroyBoxes);

function createBoxes(amount){
 
  const newBoxes = [];

 for (let i = 1; i <= amount; i += 1){
  const boxEl = document.createElement('div');
  boxEl.style.backgroundColor = getRandomHexColor();
  boxEl.style.width = boxEl.style.height = `${30 + 10* i}px`;
  newBoxes.push(boxEl);
 }
 refs.boxesEl.append(...newBoxes);  
 
}

function destroyBoxes() {
  refs.boxesEl.innerHTML = '';
  refs.inputNumber.value = '';
}





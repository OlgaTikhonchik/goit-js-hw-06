const refs = {
    nameInput: document.querySelector('#name-input'),
    nameOutput: document.querySelector('#name-output'),
};

refs.nameInput.addEventListener('input', onInputChange);


// function onInputChange(event) {
//     refs.nameOutput.textContent = event.currentTarget.value ? event.currentTarget.value : "Anonymous";
//    }

function onInputChange(event) {
    refs.nameOutput.textContent = event.currentTarget.value.trim();
    if (refs.nameOutput.textContent.length === 0) {
      refs.nameOutput.textContent = 'Anonymous';
    }
  }



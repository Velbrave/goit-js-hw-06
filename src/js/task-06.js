const refEl = document.querySelector('#validation-input');

refEl.addEventListener('blur', (e) => {
  if (e.target.value.length < 6) {
    e.target.classList.remove('valid')
    e.target.classList.add('invalid');
  } else {
    e.target.classList.remove('invalid')
    e.target.classList.add('valid');
  }
  })
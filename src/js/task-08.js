const refs = {
  formEl: document.querySelector('.login-form')
};

refs.formEl.addEventListener('submit', submitForm);
 function submitForm(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  const myData = {};

  for (let i = 0; i < event.target.elements.length; i++) {
    const element = event.target.elements[i];
    if (element.name && data.has(element.name)) {
      if (element.value === '') {
        alert('Error! All fields must be filled');
        return;
      }
      myData[element.name] = data.get(element.name);
    }
  }
  event.target.reset();
  console.log(myData);
};



// const refs = {
//   formEl: document.querySelector('.login-form'),
//   emailEl: document.querySelector('.login-form__email'),
//   passwordEl: document.querySelector('.login-form__password'),
// };

// refs.emailEl.addEventListener('blur', alertError);
// refs.passwordEl.addEventListener('blur', alertError);
// refs.formEl.addEventListener('submit', submitForm);

// function alertError(event) {
//   if (event.currentTarget.value.length < 1) {
//   alert('Error! All fields must be filled');
// }
// };

// function submitForm(event) {
//   event.preventDefault();

//   const data = new FormData(event.target);
//   const myData = {};

//   for (let i = 0; i < event.target.elements.length; i++) {
//     const element = event.target.elements[i];

//     if (element.name && data.has(element.name)) {
//       myData[element.name] = data.get(element.name);
//     };
//   };
//   event.target.reset();
//   console.log(myData);
// };

const sizeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

sizeEl.addEventListener('input', (event) => {
  const size = event.target.value;
  textEl.style.fontSize = `${size}px`;
});

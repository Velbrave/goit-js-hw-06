const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');
const elements = ingredients.map(elem => {
const listEl = document.createElement('li');
listEl.classList.add('item');
listEl.textContent = elem;
return listEl;
})

ingredientsEl.append(...elements);
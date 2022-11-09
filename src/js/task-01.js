const categoriesEl = document.querySelector('#categories');
function countCategories() {
  const list = categoriesEl.querySelectorAll('.item');
  console.log('Number of categories:', list.length);

  list.forEach(elem => {
    console.log('Category:',elem.firstElementChild.textContent);
    console.log('Elements:',elem.querySelectorAll('li').length,);
  })
}
countCategories();
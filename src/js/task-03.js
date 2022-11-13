const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const imagesEl = document.querySelector('.gallery');
// const elements = images.map(elem => {
//   const imgEl = document.createElement('li');
//   imgEl.classList.add('item');
//   const linkEl = document.createElement('img');
//   linkEl.classList.add('item__link');
//   linkEl.src = elem.url;
//   linkEl.alt = elem.alt;
//   imgEl.appendChild(linkEl) 
//   return imgEl;
// })
// imagesEl.append(...elements)

const imagesEl = document.querySelector('.gallery');
function createMarcup(array) {
  return array.map(image => {return`
   <li class="item"><img class="item__link"
   src = ${image.url},
   alt = ${image.alt},>
   </li>
   `;
  }).join(''); 
};
imagesEl.insertAdjacentHTML("beforeend", createMarcup(images));
//console.log(createMarcup(images));

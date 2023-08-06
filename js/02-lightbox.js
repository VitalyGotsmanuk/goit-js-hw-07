import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
//console.log(SimpleLightbox); // обидва слова з великої літери!

const list = document.querySelector(`.gallery`);
list.style.listStyle = `none`;

/*
preview: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
original: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
description: 'Hokkaido Flower',
*/

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => 
    `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" 
        src="${preview}" 
        alt="${description}" />
      </a>
    </li>
    `
    ).join('')
}
list.insertAdjacentHTML('beforeend', createMarkup(galleryItems)); // так само як і в першому файлф 01 

//list.addEventListener(`click`, handlerClick) 

// function handlerClick (evt){
//     evt.preventDefault(); // забороняємо події за замочуванням.
    
//     if (!evt.target.classList.contains('gallery__image')) //Якщо evt.target не (!) містить клас gallery__imag, то 
//     { return // виходимо з функції
//     }

//     // console.log(`target`, evt.target)
//     //const currentImg = evt.target.closest(`.gallery__image`);
//     //const {source} = currentImg.dataset;
// }

var lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: `alt`, // опис картинки
    captionDelay: 250, // затримка показу в мс
 }); // SimpleLightbox все робить сам, але на картинках gallery має бути лінк href="${original}
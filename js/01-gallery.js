import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems); // Перевірка, чи бачить наш код об'єкт galleryItems
//console.log(basicLightbox); // перевірка на правильність підключення бібілотеки

const list = document.querySelector(`.gallery`);// зміна list стврюється на ul class="gallery"
list.style.listStyle = `none`; //прибираємо стилізацію списку (булети)

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
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </li>
       `).join('')
}
// Функція створює список перебираючи об'єкт (galleryItems), який буде надано у виклику функції. Об'єкт перебираємо за парметрами { preview, original, description }, які додаємо до HTML. Об'єднуемо .join('')

list.insertAdjacentHTML('beforeend', createMarkup(galleryItems)); // До list через виклик createMarkup додаємо список що створений обробкою galleryItems за шаблоном 
list.addEventListener(`click`, handlerClick) //Додаємо прослуховування на клік на список gallery

function handlerClick (evt){
    evt.preventDefault(); // забороняємо події за замочуванням.
    
    if (!evt.target.classList.contains('gallery__image')) //Якщо evt.target не (!) містить клас gallery__imag, то 
    { return } // виходимо з функції

    // console.log(`target`, evt.target)
    const currentImg = evt.target.closest(`.gallery__image`);// визнвачаємо змінну, в якій фіксуємо ту картинку по якій клікнули
    const {source} = currentImg.dataset; // з поточної картинки дістаємо значення з data - data-source
    
    //console.log(source)

    //створюємо змінну instance за допомогою basicLightbox, в адресі до картинки ставимо змінну, яка визначена у source. 
    const instance = basicLightbox.create(`
	    <div class="box">
            <img
            class="modal__image"
            src="${source}" 
            alt="Big picture"
            width="900" height="600"            
            />
        </div>`);
        instance.show();//команда виводить модальне вікно від basicLightbox
        
    list.addEventListener (`keydown`, (evt => {
        if(evt.code === `Escape`) {
            instance.close();
        }
    }));
    //

    //console.log(`currentTarget`, evt.currentTarget)
}

//console.log(list);




import {Animals} from '../js/const.js';
import {generateRandomElement} from '../js/utils.js';

const petsListsElements = document.querySelectorAll('.pets__list');
const desktopPetsCount = 6;

// получаем из массива Animals 6 случайных элементов и записываем их в Map
const getAnimalsElements = (arr) => {
  const randomAnimalsMap = new Map();
  randomAnimalsMap.length = desktopPetsCount;

  for(let i = 0; i < randomAnimalsMap.length; i++) {
    const item = generateRandomElement(arr);
    if(randomAnimalsMap.has(item.id)) {
      i--;
      continue;
    } else {
      randomAnimalsMap.set(item.id, item);
    }    
  }

  return randomAnimalsMap;
}

// генерируем одну карточку
function generateCard(animal) {
  return (
    `<div class="pets__item" tabindex="0">             
        <div class="pets__image-wrapper pets__image-wrapper--${animal.id}">
          <span class="pets__overlay"></span>
          <picture>
            <source media="(max-width: 639px)" srcset="assets/img/${animal.id}_mobile.jpg">
            <source media="(max-width: 1599px)" srcset="assets/img/${animal.id}_small-desktop.jpg">
            <img class="pets__img" src="${animal.image}" alt="${animal.id}">
          </picture>
        </div>
        <div class="pets__info pets__info--${animal.id}">
          <p class="pets__name">${animal.name}</p>
          <p class="pets__home-country">${animal.country}</p>
        </div>            
      </div>`
  );
};

// для каждого из 6 элементов отрисовываем разметку с данными
const renderCards = (container) => { 
  const cards = getAnimalsElements(Animals);
  const cardsArr = [];

  for (const card of cards.values()) { 
    const elem = generateCard(card);   
    cardsArr.push(elem); 
  }
  container.innerHTML = [...cardsArr].join(''); 
}

petsListsElements.forEach(item => renderCards(item));

// перелистывание слайдов в блоке Pets
const btnLeft = document.querySelector('.pets__button--left');
const btnRight = document.querySelector('.pets__button--right');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
  currentItem = (n + petsListsElements.length) % petsListsElements.length;
}

function hideItem(direction) {
  isEnabled = false;
  petsListsElements[currentItem].classList.add(direction);
  petsListsElements[currentItem].addEventListener('animationend', function () {
    this.classList.remove('pets__list--active', direction);    
  })
}

function showItem(direction) {
  petsListsElements[currentItem].classList.add('pets__list--next', direction);
  petsListsElements[currentItem].addEventListener('animationend', function () {
    this.classList.remove('pets__list--next', direction);
    this.classList.add('pets__list--active');
    isEnabled = true;
  })  
}

function previosItem(n) {
  hideItem('to-right');
  changeCurrentItem(n - 1);
  showItem('from-left'); 
}

function nextItem(n) {
  hideItem('to-left');
  changeCurrentItem(n + 1);
  showItem('from-right'); 
}

btnLeft.addEventListener('click', function () {
  if (isEnabled) {     
    previosItem(currentItem);
    renderCards(petsListsElements[currentItem]);
  }
})

btnRight.addEventListener('click', function () {
  if (isEnabled) { 
    nextItem(currentItem);  
    renderCards(petsListsElements[currentItem]);
  }
});
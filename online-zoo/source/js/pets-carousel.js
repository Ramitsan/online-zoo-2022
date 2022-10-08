// import Animals from './const.js';
// import {generateRandomElement} from './utils';

const Animals = [
  {
    id: 'pandas',
    name: 'giant Pandas',
    country: 'Native to Southwest China',
    image: 'assets/img/pandas_desktop.jpg',
  },
  {
    id: 'eagles',
    name: 'Eagles',
    country: 'Native to South America',
    image: 'assets/img/eagles_desktop.jpg',
  },
  {
    id: 'gorillas',
    name: 'Gorillas',
    country: 'Native to Congo',
    image: 'assets/img/gorillas_desktop.jpg',
  },
  {
    id: 'sloth',
    name: 'Two-toed Sloth',
    country: 'Mesoamerica, South America',
    image: 'assets/img/sloth-animal_desktop.jpg',
  },
  {
    id: 'cheetahs',
    name: 'Cheetahs',
    country: 'Native to Africa',
    image: 'assets/img/cheetahs_desktop.jpg',
  },
  {
    id: 'penguins',
    name: 'Penguins',
    country: 'Native to Antarctica',
    image: 'assets/img/penguins_desktop.jpg',
  },
  {
    id: 'fox',
    name: 'Fox',
    country: 'Native to Europe',
    image: 'assets/img/fox_desktop.jpg',
  },
  {
    id: 'elephant',
    name: 'Elephant',
    country: 'Native to Africa',
    image: 'assets/img/elephant_desktop.jpg',
  },
  {
    id: 'kangaroo',
    name: 'Kangaroo',
    country: 'Native to Australia',
    image: 'assets/img/kangaroo_desktop.jpg',
  },
  {
    id: 'koala',
    name: 'Koala',
    country: 'Native to Australia',
    image: 'assets/img/koala_desktop.jpg',
  },
  {
    id: 'parrots',
    name: 'Parrots',
    country: 'Native to Australia',
    image: 'assets/img/parrots_desktop.jpg',
  },
  {
    id: 'zebra',
    name: 'Zebra',
    country: 'Native to Africa',
    image: 'assets/img/zebra_desktop.jpg',
  },
  {
    id: 'squirrel',
    name: 'Squirrel',
    country: 'Native to Europe',
    image: 'assets/img/squirrel_desktop.jpg',
  },
  {
    id: 'bear',
    name: 'Bear',
    country: 'Native to Europe',
    image: 'assets/img/bear_desktop.jpg',
  },
  {
    id: 'boar',
    name: 'Boar',
    country: 'Native to Europe',
    image: 'assets/img/boar_desktop.jpg',
  },
  {
    id: 'bison',
    name: 'Bison',
    country: 'Native to Europe',
    image: 'assets/img/bison_desktop.jpg',
  },
  {
    id: 'owl',
    name: 'Owl',
    country: 'Native to Europe',
    image: 'assets/img/owl_desktop.jpg',
  },
  {
    id: 'deer',
    name: 'Deer',
    country: 'Native to Europe',
    image: 'assets/img/deer_desktop.jpg',
  },
];

//utils.js
// генерация случайного числа в заданном интервале, включительно
const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

// генерация случайного элемента из массива
const generateRandomElement = (arr) => {
  const index = getRandomInteger(0, arr.length - 1);
  return arr[index];
};

const petsListOne = document.querySelector('.pets__list--one');
const petsListTwo = document.querySelector('.pets__list--two');
const petsListThree = document.querySelector('.pets__list--three');
const desktopPetsCount = 6;


// получаем из массива Animals 6 случайных элементов и записываем их в Map
const getAnimalsElements = (arr) => {
  const sixCardsMap = new Map();
  sixCardsMap.length = desktopPetsCount;

  for(let i = 0; i < sixCardsMap.length; i++) {
    const item = generateRandomElement(arr);
    if(sixCardsMap.has(item.id)) {
      return;
    } else {
      sixCardsMap.set(item.id, item);
    }    
  }

  console.log(sixCardsMap.size);
  return sixCardsMap;
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
  console.log(cards);
  const arr2 = [];

  for (const card of cards.values()) { 
    const elem = generateCard(card);
    arr2.push(elem);   
  }

  container.innerHTML = [...arr2].join(''); 
}

renderCards(petsListOne);
renderCards(petsListTwo);
renderCards(petsListThree);


// слайдер в блоке Pets
const petsListsElements = document.querySelectorAll('.pets__list');
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
  }
})

btnRight.addEventListener('click', function () {
  if (isEnabled) {
    nextItem(currentItem);
  }
});
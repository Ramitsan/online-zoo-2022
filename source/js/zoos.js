'use strict';

const mainVideo = document.querySelector('.animal-page__iframe');
const previewsCollection = document.querySelectorAll('.watch-online__video');

// на iframe не срабатывает событие click, поэтому навешиваем клик на родителя
previewsCollection.forEach(item => {
  item.addEventListener('click', function () {
    const iframe = item.querySelector('.watch-online__iframe');
    let currentUrl = mainVideo.src;
    mainVideo.src = iframe.src;
    iframe.src = currentUrl;
  })
});

// карусель превью видео
const carouselGap = 30;
const getSlideWidth = () => {
  return  previewsCollection[0].getBoundingClientRect().width + carouselGap;
}

console.log(223);
const carousel = document.querySelector('.watch-online__frame-box'),
  content = document.querySelector('.watch-online__previews'),
  buttonRight = document.querySelector('.watch-online__button--right'),
  buttonLeft = document.querySelector('.watch-online__button--left');

buttonRight.addEventListener('click', () => {
  const gap = getSlideWidth();
  carousel.scrollBy(gap, 0);
  if (carousel.scrollWidth !== 0) {
    buttonLeft.style.opacity = 1;
  }
  if (content.scrollWidth - gap <= carousel.scrollLeft + width) {
    buttonRight.style.opacity = 0.5;
  }
});
buttonLeft.addEventListener('click', () => {
  const gap = getSlideWidth();
  carousel.scrollBy(-(gap), 0);
  if (carousel.scrollLeft - gap <= 0) {
    buttonLeft.style.opacity = 0.5;
  }
  if (!content.scrollWidth - gap <= carousel.scrollLeft + width) {
    buttonRight.style.opacity = 1;
  }
});

let width = carousel.offsetWidth;
window.addEventListener('resize', () => (width = carousel.offsetWidth));

  // спойлер
  const btnDescription = document.querySelector('.description-animal__button');
  const descriptionAnimal = document.querySelector('.description-animal');

  btnDescription.addEventListener('click', () => {
    descriptionAnimal.classList.toggle('description-animal--hidden');
    if (descriptionAnimal.classList.contains('description-animal--hidden')) {
      btnDescription.textContent = 'Read More';
    } else {
      btnDescription.textContent = 'Read Less';
    }
  });
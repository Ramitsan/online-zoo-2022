import { generateRandomElement, getRandomArray, initUid } from '../js/utils.js';

const AUTHOR_AVATARS = ['user_icon1.png', 'user_icon2.png', 'user_icon3.png', 'user_icon4.png', 'user_icon5.png', 'user_icon6.png',
  'user_icon7.png', 'user_icon8.png', 'user_icon9.png', 'user_icon10.png', 'user_icon11.png'];
const AUTHOR_NAMES = ['Michael John', 'Oskar Samborsky', 'Fredericka Michelin', 'Mila Riksha', 'John Doe', 'Tim Macoveev'];
const AUTHOR_LOCALS = ['Local Austria', 'Local Sweden', 'Local Norway', 'Local Portugal', 'Local Brazil'];
const DATES = ['Today', 'Yesterday', 'Two days ago', 'Last month', 'Last year'];
const TESTIMONIAL_TEXTS = ['The best online zoo I’ve met. My son delighted very much ljves to watch gorillas.',
  'Online zoo is one jf the ways to instill a love for animals. The best online zoo I’ve met.',
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
  'Exercitationem, maiores sit, soluta a architecto magnam harum corrupti, veritatis distinctio rem sint similique asperiores repellat quasi.',
  'Laudantium, dolores nulla! Molestiae, eligendi?',
  'Est autem vel laborum reiciendis, voluptates iusto hic eum similique officiis exercitationem aliquid unde minus omnis animi nesciunt.',
  'Rem quos impedit doloremque.'];

const testimonialsListElement = document.querySelector('.testimonials__list');
const testimonialCount = 11;

// создаем один отзыв
function createTestimonial() {
  const testimonial = {
    'id': initUid('card'),
    'author_avatar': generateRandomElement(AUTHOR_AVATARS),
    'author_name': generateRandomElement(AUTHOR_NAMES),
    'author_local': generateRandomElement(AUTHOR_LOCALS),
    'date': generateRandomElement(DATES),
    'text': getRandomArray(TESTIMONIAL_TEXTS),
  };
  return testimonial;
}

// создаем массив отзывов
function createTestimonials(length) {
  const testimonialsArr = [];
  for (let i = 0; i < length; i++) {
    testimonialsArr[i] = createTestimonial();
  }
  return testimonialsArr;
}

// создаем шаблон для одного отзыва
function generateTestimonialItem(testimonial) {
  return (
    `<li class="testimonials__item testimonial-card">
        <blockquote>
          <div class="testimonial-card__user-info">
            <img class="testimonial-card__user-avatar" src="assets/icons/${testimonial.author_avatar}" alt="user's avatar">
            <div class="testimonial-card__user-data">
              <cite class="testimonial-card__user-name">${testimonial.author_name}</cite>
              <p class="testimonial-card__box">
                <span class="testimonial-card__user-local">${testimonial.author_local}</span>
                <span class="testimonial-card__day">${testimonial.date}</span>
              </p>
            </div>
          </div>
          <p class="testimonial-card__text">${testimonial.text}</p>
          <p class="testimonial-card__text">${testimonial.text}</p>
        </blockquote>
      </li>`
  );
}

// создаем массив отзывов с шаблонами и рендерим его на страницу 
const renderTestimonialCards = (container) => {
  const testimonialCards = [];
  const testimonials = createTestimonials(testimonialCount);

  testimonials.forEach(item => {
    testimonialCards.push(generateTestimonialItem(item));
  });

  container.innerHTML = [...testimonialCards].join('');
}
renderTestimonialCards(testimonialsListElement);


// слайдер в блоке Testimonials
const gap = 32;
const testimonialsCarousel = document.querySelector('.testimonials__carousel');
const testimonialsList = document.querySelector('.testimonials__list');
const testimonialsInputRange = document.querySelector('#testimonials-count');

let slideIndex = 0;
testimonialsInputRange.value = 0;

let width = testimonialsCarousel.offsetWidth;
let cardWidth = document.querySelector('.testimonial-card').offsetWidth;

window.addEventListener('resize', (e) => {
  width = testimonialsCarousel.offsetWidth;
  cardWidth = document.querySelector('.testimonial-card').offsetWidth;
});


// Прокрутка слайдов при перетягивании ползунка инпута
function changeRangeInput() {
  testimonialsList.style.transition = "transform 0.4s ease-in-out";
  slideIndex = +testimonialsInputRange.value;
  testimonialsList.style.transform = 'translateX(' + ((-cardWidth + -gap) * slideIndex) + 'px)'; 
  // testimonialsList.style.transform = `translateX((${cardWidth} + ${gap}) * ${slideIndex})px)`; 
}

testimonialsInputRange.addEventListener('mousemove', changeRangeInput);



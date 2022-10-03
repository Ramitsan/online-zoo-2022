// 'use strict';
// var pageHeader = document.querySelector('.page-header');
// var headerToggle = document.querySelector('.page-header__toggle');

// pageHeader.classList.remove('page-header--nojs');

// headerToggle.addEventListener('click', function () {
//   if (pageHeader.classList.contains('page-header--closed')) {
//     pageHeader.classList.remove('page-header--closed');
//     pageHeader.classList.add('page-header--opened');
//   } else {
//     pageHeader.classList.add('page-header--closed');
//     pageHeader.classList.remove('page-header--opened');
//   }
// });

// изменение выделенной суммы при загрузке страницы на планшетном и мобильном разрешении
const donateFormItemOneThousandElement = document.querySelector('#radio-1000');
const donateFormItemOneHundredElement = document.querySelector('#radio-100');

const mediaQueryTablet = window.matchMedia('(max-width: 999px)')
// Создаем медиа условие, проверяющее viewports на ширину не более 999 пикселей.
if (mediaQueryTablet.matches && (donateFormItemOneThousandElement.style.display = 'none')) {
        donateFormItemOneThousandElement.checked = false;
        donateFormItemOneHundredElement.checked = true;
    };

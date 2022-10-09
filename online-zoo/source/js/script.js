export { mediaQueryTablet } from '../js/const.js';

// изменение выделенной суммы при загрузке страницы на планшетном и мобильном разрешении
const donateFormItemOneThousandElement = document.querySelector('#radio-1000');
const donateFormItemOneHundredElement = document.querySelector('#radio-100');

// Создаем медиа условие, проверяющее viewports на ширину не более 999 пикселей.
if (mediaQueryTablet.matches && (donateFormItemOneThousandElement.style.display = 'none')) {
        donateFormItemOneThousandElement.checked = false;
        donateFormItemOneHundredElement.checked = true;
    };

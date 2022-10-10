'use strict';
//показ и закрытие бургерного меню
const mainNav = document.querySelector('.main-nav');
const mainNavToggle = document.querySelector('.main-nav__toggle');
const logo = document.querySelector('.page-header__logo');
let overlay;
let mainNnavLinkActive = document.querySelector('.main-nav__link--active');
const header = document.querySelector('header');

function toggleMenuMobile() {
  if (mainNav.classList.contains('main-nav--closed')) {
    openMenu();
    overlay = createOverlay();
    header.appendChild(overlay);
  } else {
    closeMenu();
  }
  overlay.addEventListener('click', closeMenu);
}

function openMenu() {
  mainNav.classList.remove('main-nav--closed');
  mainNav.classList.add('main-nav--opened');
  mainNavToggle.style.backgroundImage = 'url(./assets/icons/x_icon.png)';
  mainNavToggle.style.backgroundSize = '14px 14px';
  document.body.style.overflowY = 'hidden';
  createOverlay();
}

function closeMenu() {
  mainNav.classList.add('main-nav--closed');
  mainNav.classList.remove('main-nav--opened');
  mainNavToggle.style.backgroundImage = 'url(./assets/icons/burger_menu_tablet.png)';
  mainNavToggle.style.backgroundSize = '18px 10px';
  document.body.style.overflowY = 'visible';
  removeOverlay();
}

mainNavToggle.addEventListener('click', toggleMenuMobile);
mainNnavLinkActive.addEventListener('click', closeMenu);

// создаем динамический оверлей
function createOverlay() {
  let overlayElement = document.createElement('div');
  overlayElement.style.position = 'fixed';
  overlayElement.style.backgroundColor = 'rgba(41,41,41,0.6)';
  overlayElement.style.left = 0;
  overlayElement.style.right = 0;
  overlayElement.style.top = 0;
  overlayElement.style.bottom = 0;
  overlayElement.style.zIndex = '999';
  overlayElement.style.display = 'flex';
  return overlayElement;
}

function removeOverlay() {
  overlay.remove();
  overlay.removeEventListener('click', createOverlay);
}
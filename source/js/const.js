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

const mediaQuerySmalldesktop = window.matchMedia('(max-width: 1599px)');
const mediaQueryTablet = window.matchMedia('(max-width: 999px)');
const mediaQueryMobile = window.matchMedia('(max-width: 639px)');

export {Animals, mediaQuerySmalldesktop, mediaQueryTablet, mediaQueryMobile};
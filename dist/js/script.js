/* ---------------------------------Меню---------------------------- */
const   hamburger = document.querySelector('.hamburger'),
        menu      = document.querySelector('.menu'),
        closeElem = document.querySelector('.menu__close'),
        closeOverlay = document.querySelector('.menu__overlay');

/* Открывает */
hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});
/* Закрывает при клике на крестик */
closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});
/* Закрывает при клике на пустое белое пространство */
closeOverlay.addEventListener('click', () => {
    menu.classList.remove('active');
});
/* --------------------------------------------------------------- */

/* --------------------------Кнопки Promo------------------------- */
const   cubeActive = document.querySelector('.promo__cube_active'),
        cube = document.querySelector('.promo__cube'),
        elemCube = document.getElementById('elemCube');

elemCube.addEventListener('mouseover', () => {
    cube.classList.add('promo__cube_active');
});

elemCube.addEventListener('mouseout', () => {
    cube.classList.remove('promo__cube_active');
});

/* --------------------------------------------------------------- */
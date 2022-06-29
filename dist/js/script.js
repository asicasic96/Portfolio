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
/* С помощью движения обьекта */
/* const   cubeActive = document.querySelector('.promo__cube_active'),
        cube = document.querySelector('.promo__cube'),
        elemCube = document.getElementById('elemCube');

elemCube.addEventListener('mouseover', () => {
    cube.classList.add('promo__cube_active');
});

elemCube.addEventListener('mouseout', () => {
    cube.classList.remove('promo__cube_active');
}); */

/* С помощью переключения */
const   /* cubeActive = document.querySelector('.promo__button-active'), */
        button = document.querySelector('.promo__button'),
        elemCube1 = document.getElementById('elemCube1'),
        elemCube2 = document.getElementById('elemCube2');

elemCube2.addEventListener('mouseover', () => {
    elemCube1.classList.remove('promo__button-active');
    elemCube2.classList.add('promo__button-active');
});

elemCube2.addEventListener('mouseout', () => {
    elemCube2.classList.remove('promo__button-active');
    elemCube1.classList.add('promo__button-active');
});
/* --------------------------------------------------------------- */



/* const   button = document.querySelector('.button'),
        elem1 = document.getElementById('my1'),
        elem2 = document.getElementById('my2');

elem2.addEventListener('mouseover', () => {
    elem1.classList.remove('button');
    elem2.classList.add('button');
});

elem2.addEventListener('mouseout', () => {
    elem2.classList.remove('button');
    elem1.classList.add('button');
}); */

/* ----------------------------------- Progress ----------------------------------- */

const   progress = document.querySelectorAll('.progress__percent'),
        progressFull = document.querySelectorAll('.progress__scale-full');

        progress.forEach((item, i) => {
            progressFull[i].style.width = item.innerHTML;
        });
// Объявление переменных 

const navBtn = document.querySelector('.nav-btn'); 
const mobileNav = document.querySelector('.mobile-nav');
const body = document.body;

// Клик по кнопке

navBtn.addEventListener('click', function (event) {
    event.stopPropagation();
    mobileNav.classList.toggle('mobile-nav--active');
    navBtn.classList.toggle('nav-btn--close');
    body.classList.toggle('no-scroll');
})

// Клик за пределами навигации 

window.addEventListener('touchstart', function () {
    console.log('cat');

    if (body.classList.contains('no-scroll')) {
        body.classList.toggle('no-scroll');
        navBtn.classList.toggle('nav-btn--close');
        mobileNav.classList.toggle('mobile-nav--active');
    }
})

// Останавливаем клик внутри открытой мобильной навигации 

mobileNav.addEventListener('touchstart', function (event) {
    event.stopPropagation();
})
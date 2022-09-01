const menuToggle = document.querySelector('#menu-bars');
const navbar = document.querySelector('.navbar');
const searchIcon = document.querySelector('#search-icon');
const searchForm = document.querySelector('#search-form');
const closeIcon = document.querySelector('#close');


menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

window.addEventListener('scroll', ()=>{
    menuToggle.classList.remove('fa-times');
    navbar.classList.remove('active');
});

searchIcon.addEventListener('click', () => {
    searchForm.classList.toggle('active');
});

closeIcon.addEventListener('click', () => {
    searchForm.classList.remove('active');
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
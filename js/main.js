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
    console.log('search toggle')
    searchForm.classList.toggle('active');
});

closeIcon.addEventListener('click', () => {
    console.log('holu')
    searchForm.classList.remove('active');
})
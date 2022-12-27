let closer = document.querySelector('#closer');
let cartBtn = document.querySelector('#cart-btn');
let loginBtn = document.querySelector('#login-btn');
let searchBtn = document.querySelector('#search-btn');
let navbar = document.querySelector('.navbar');
let shoppingCart = document.querySelector('.shopping-cart');
let loginForm = document.querySelector('.login-form');
let searchForm = document.querySelector('.search-form');

document.querySelector('#menu-btn').onclick = () => {
    closer.style.display = 'block';
    navbar.classList.toggle('active');
}
closer.onclick = () => {
    navbar.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    closer.style.display = 'none';
}
cartBtn.onclick = () => {
    closer.style.display = 'block';
    shoppingCart.classList.toggle('active');
}
loginBtn.onclick = () => {
    closer.style.display = 'block';
    loginForm.classList.toggle('active');
}
searchBtn.onclick = () => {
    searchBtn.classList.toggle('fa-times')
    searchForm.classList.toggle('active');
}
window.onscroll = () => {
    searchBtn.classList.remove('fa-times')
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
    closer.style.display = 'none';
}
let slides = document.querySelectorAll('.home .slides-container .slide');
let index = 0;

function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}
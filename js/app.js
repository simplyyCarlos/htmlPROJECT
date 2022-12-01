console.log('app.js successfully loaded');
const menuHamburger = document.querySelector(".menu-hamburger")
const navLink = document.querySelector("header ul")

menuHamburger.addEventListener('click', () => {
navLink.classList.toggle('mobile-menu')
})

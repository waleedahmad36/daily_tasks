const navbar = document.querySelector('.navbar');
const menuIcon = document.querySelector('.menu-icon');
const navTaskBtn = document.querySelector(".nav-btn");

menuIcon.addEventListener('click', ()=> {
    navbar.classList.toggle('navigate')
})

navTaskBtn.addEventListener('click', ()=> {
    navbar.classList.toggle('navigate')
})
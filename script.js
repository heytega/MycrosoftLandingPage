// ----------------------MICROSOFT DROP-DOWN MENU
// All microsoft services dropdow menu at large screen resolution.
document.querySelector('.drop-down').addEventListener('click', ()=> document.querySelector('.microsoft').classList.toggle('show'));

document.querySelector('.drop-down').addEventListener('click', () => document.querySelector('.drop-down').classList.toggle('touch'));

// ----------------------------BURGER MENU
// A function to display each hidden list items within the main list items in the side bar menu.
let openBurger = function () {

    document.querySelector('#btnSoftware').addEventListener('click', ()=> document.querySelector('.software').classList.toggle('show'));

    document.querySelector('#btnDevices').addEventListener('click', ()=> document.querySelector('.device').classList.toggle('show'));

    document.querySelector('#btnEntertain').addEventListener('click', ()=> document.querySelector('.entertain').classList.toggle('show'));

    document.querySelector('#btnDeveloper').addEventListener('click', ()=> document.querySelector('.developer').classList.toggle('show'));

    document.querySelector('#btnOther').addEventListener('click', ()=> document.querySelector('.other').classList.toggle('show'));

    document.querySelector('#btnBusiness').addEventListener('click', ()=> document.querySelector('.businesses').classList.toggle('show'));
}

const openNavButton = document.querySelector('#openNav')

const closeNavButton = document.querySelector('#closeNav')

const sideNav = document.querySelector('.burger-menu')


function toggleNavButton(){
    openNavButton.classList.toggle('show')
    closeNavButton.classList.toggle('show')
}

function openNav(){
    toggleNavButton();
    sideNav.style.display= "block";
    openBurger();
    
}

function closeNav(){
    toggleNavButton();
    sideNav.style.display = "none";
}

openNavButton.addEventListener('click', openNav)
closeNavButton.addEventListener('click', closeNav)
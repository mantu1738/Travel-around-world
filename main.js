
const menuToggle = document.querySelector('.toggle');
const showCase = document.querySelector('.show-case');

//Functions




//Event Listners

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active')
    showCase.classList.toggle('active')
})
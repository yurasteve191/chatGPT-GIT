const burgerBtn = document.querySelector('.burger-menu-btn')
const burgerMenu = document.querySelector('.burger-menu')

burgerBtn.addEventListener('click', (event) => {
    burgerMenu.classList.toggle('burger-menu-active')
  });
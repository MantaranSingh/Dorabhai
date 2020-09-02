let burger = document.querySelector('.burger')
let sideBar = document.querySelector('.sideBar')
burger.addEventListener('click', () => {
    sideBar.classList.toggle('navActive')
    burger.classList.toggle('toggle')
})
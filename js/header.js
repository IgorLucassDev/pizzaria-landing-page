let menuButton = document.querySelector("#menu-btn")
let closeButton = document.querySelector("#close-btn")
menuButton.addEventListener('click', menuToggle)
closeButton.addEventListener('click', closeMenu)
let myNav = document.querySelector('.nav-itens')



function menuToggle(){  
    myNav.style.display = 'block'
    myNav.style.right = '0'
}

function closeMenu(){
    myNav.style.right = '-300px'
    myNav.style.display = 'none'
}
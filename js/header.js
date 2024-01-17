var openButton = document.querySelector('.menu-btn')
openButton.addEventListener('click', openMenu)

var closeButton = document.querySelector('.close-menu')
closeButton.addEventListener('click', closeMenu)

var Menu = document.querySelector('.mobile-menu')

var Content = document.querySelector('#main-content')

var Landscape = document.querySelector('.landscape-img')

var Alert = document.querySelector('.alert')

var Card = document.querySelector('.cards')


function openMenu(){
    Menu.style.display = 'flex'
    Landscape.style.webkitFilter = 'blur(5px)';
    Alert.style.webkitFilter = 'blur(5px)';
    Card.style.webkitFilter = 'blur(5px)';
    document.body.style.overflow = 'hidden'
    Content.addEventListener('click', closeMenu)
}

function closeMenu(){
    Menu.style.display = 'none'
    Landscape.style.webkitFilter = 'blur(0px)';
    Alert.style.webkitFilter = 'blur(0px)';
    Card.style.webkitFilter = 'blur(0px)';
    document.body.style.overflow = 'auto'
}


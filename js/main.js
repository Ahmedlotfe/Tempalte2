let menuBtn = document.getElementById('toggle-menu')
let navMenu = document.getElementById('nav-menu')

menuBtn.onclick = function () {
    if (navMenu.style.display == 'none') {
        navMenu.style.display = 'block'
    } else {
        navMenu.style.display = 'none'
    }
}
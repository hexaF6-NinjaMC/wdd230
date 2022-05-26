function toggleMenu() {
    document.getElementsByClassName('navigation')[0].classList.toggle('responsive')
    
    if (document.getElementsByClassName('responsive')[0]) {
        document.getElementsByTagName('a')[0].innerHTML = '&#10006; CLOSE';
    } else {
        document.getElementsByTagName('a')[0].innerHTML = '&#9776; MENU';
    }
}
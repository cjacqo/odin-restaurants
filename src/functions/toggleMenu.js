const toggleMenu = (menu) => {
    if (!menu) {
        menu.classList.remove('hidden')
    } else {
        menu.classList.toggle('hidden')
    }
}

export default toggleMenu
import Home from '../pages/Home'
import MainMenu from '../pages/MainMenu'
import MenuData from '../data/menu_data'

/*
    1 - select the content div
    2 - remove the content from it
    3 - switch statement to run page
*/
const render = (page) => {
    // 1
    const content = document.getElementById('content')
    // 2
    while (content.children.length > 1) {
        content.children[1].remove()
    }
    const ul = document.querySelector('ul')
    // 3
    switch(page) {
        case 'Home':
            console.log(ul)
            Home()
            return
        case 'Menu':
            MainMenu(MenuData)
            return
        default:
            if (!ul.classList.contains('hidden')) {
                const menuIcon = document.getElementById('navMenuIcon')
                menuIcon.classList.remove('fa-times')
                menuIcon.classList.add('fa-bars')
                ul.classList.toggle('hidden')
            }
            Home()
            return
    }
}

export default render
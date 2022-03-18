import toggleMenu from './toggleMenu'
import Home from '../pages/Home'
import MainMenu from '../pages/MainMenu'

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
    // 3
    switch(page) {
        case 'Home':
            Home()
            return
        case 'Menu':
            MainMenu()
            return
        default:
            Home()
            return
    }
}

export default render
import Home from '../pages/Home'
import MainMenu from '../pages/MainMenu'
import MenuData from '../data/menu_data'
import { Nav } from '../components/Nav'
import Footer from '../components/Footer'

/*
    1 - select the content div
    2 - remove the content from it
    3 - create navigation and footer components; append JUST the navigation to content
    4 - query select the ul from the just append Nav component
    5 - switch statement to run page
    6 - append the footer to the content div
*/
const render = (page) => {
    // 1
    const content = document.getElementById('content')
    // 2
    while (content.children.length > 1) {
        content.children[1].remove()
    }
    // 3
    const navigation = Nav()
    const footer = Footer()
    content.appendChild(navigation)
    // 4
    const ul = document.querySelector('ul')
    // 5
    switch(page) {
        case 'Home':
            console.log(ul)
            Home()
        case 'Menu':
            MainMenu(MenuData)
        default:
            // Condition to toggle classes for animation and changing navMenuIcon
            //      from times (x) to bars (lines) if the nav menu is not hidden
            if (!ul.classList.contains('hidden')) {
                const menuIcon = document.getElementById('navMenuIcon')
                menuIcon.classList.remove('fa-times')
                menuIcon.classList.add('fa-bars')
                ul.classList.toggle('hidden')
            }
            console.log("HIDIDI")
            Home()
    }
    // 6
    content.appendChild(footer)
}

export default render
import render from '../functions/render'

const Logo = (title) => {
    const logoContainer = document.createElement('div')
    const logoText      = document.createElement('h3')
    logoContainer.classList.add('logo-container', 'pointer')
    logoText.classList.add('logo-text')
    logoText.innerText = title
    logoContainer.appendChild(logoText)
    logoContainer.addEventListener('click', () => {
        render()
    })
    return logoContainer
}

const MenuList = () => {
    const links = ['Home', 'Menu', 'About']
    const menuListContainer = document.createElement('ul')
    menuListContainer.classList.add('nav-list-container', 'hidden')
    links.forEach(li => {
        let menuItem = document.createElement('li')
        menuItem.classList.add('nav-menu-link', 'pointer')
        menuItem.innerText = li
        menuItem.addEventListener('click', (e) => {
            e.stopImmediatePropagation()
            toggleMenu(menuListContainer)
            render(li)
        }, true)
        menuListContainer.appendChild(menuItem)
    })
    return menuListContainer
}

function preventScroll(scroll) {
    const body = document.body
    if (scroll) {
        body.style.position = 'fixed'
    } else {
        body.style.position = ''
    }
}

function toggleMenu(menu) {
    // get nav menu icon (bars or times) to swap the class
    const menuIcon = document.getElementById('navMenuIcon')
    menu.classList.toggle('hidden')

    if (menu.classList.contains('hidden')) {
        menuIcon.classList.remove('fa-times')
        menuIcon.classList.add('fa-bars')
        preventScroll(false)
    } else {
        menuIcon.classList.remove('fa-bars')
        menuIcon.classList.add('fa-times')
        preventScroll(true)
    }
}

const NavMenu = () => {
    const navMenuContainer = document.createElement('div')
    const navMenuIcon      = document.createElement('i')
    navMenuContainer.classList.add('nav-menu-container')
    navMenuIcon.classList.add('fa-solid', 'fa-bars', 'pointer', 'nav-menu-icon')
    navMenuIcon.setAttribute('id', 'navMenuIcon')
    const menuList = MenuList()

    navMenuIcon.addEventListener('click', () => {
        toggleMenu(menuList)
    })

    navMenuContainer.appendChild(menuList)
    navMenuContainer.appendChild(navMenuIcon)
    return navMenuContainer
}

const Nav = () => {
    const container = document.createElement('div')
    container.classList.add('nav-container', 'flex')

    // --- append children
    container.appendChild(Logo(`P.F. Chang's`))
    container.appendChild(NavMenu())
    return container
}

export default Nav
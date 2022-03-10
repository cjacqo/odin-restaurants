const Logo = (title) => {
    const logoContainer = document.createElement('div')
    const logoText      = document.createElement('h3')
    logoContainer.classList.add('logo-container')
    logoText.classList.add('logo-text')
    logoText.innerText = title
    logoContainer.appendChild(logoText)
    return logoContainer
}

const MenuList = () => {
    const links = ['Home', 'Menu', 'Contact']
    const menuListContainer = document.createElement('ul')
    menuListContainer.classList.add('menu-list-container', 'hidden')
    links.forEach(li => {
        let menuItem = document.createElement('li')
        menuItem.innerText = li
        menuListContainer.appendChild(menuItem)
    })
    return menuListContainer
}

function toggleMenu(menu) {
    menu.classList.toggle('hidden')
}

const NavMenu = () => {
    const navMenuContainer = document.createElement('div')
    const navMenuIcon      = document.createElement('i')
    navMenuContainer.classList.add('nav-menu-container')
    navMenuIcon.classList.add('fa-solid', 'fa-bars', 'pointer')
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

    container.style.height = '50px'

    container.style.backgroundColor = 'green'

    // --- append children
    container.appendChild(Logo(`P.F. Chang's`))
    container.appendChild(NavMenu())
    return container
}

export default Nav
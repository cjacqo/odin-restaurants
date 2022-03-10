const Logo = (title) => {
    const logoContainer = document.createElement('div')
    const logoText      = document.createElement('h3')
    logoContainer.classList.add('logo-container')
    logoText.classList.add('logo-text')
    logoText.innerText = title
    logoContainer.appendChild(logoText)
    return logoContainer
}

const NavMenu = () => {
    const navMenuContainer = document.createElement('div')
    const navMenuIcon      = document.createElement('i')
    navMenuContainer.classList.add('nav-menu-container')
    navMenuIcon.classList.add('fa-solid', 'fa-bars', 'pointer')
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
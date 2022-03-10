const Logo = (title) => {
    const logoContainer = document.createElement('div')
    const logoText      = document.createElement('h3')
    logoContainer.classList.add('logo-container')
    logoText.classList.add('logo-text')
    logoText.innerText = title
    logoContainer.appendChild(logoText)
    return logoContainer
}

const Nav = () => {
    const container = document.createElement('div')

    container.style.height = '50px'

    container.style.backgroundColor = 'green'

    // --- append children
    container.appendChild(Logo(`P.F. Chang's`))
    return container
}

export default Nav
import Nav from '../components/Nav'

const Header = () => {
    const headerContainer = document.createElement('header')
    const navMenuLinks = Nav().childNodes[1].childNodes[0].childNodes
    console.log(navMenuLinks)
    headerContainer.appendChild(Nav())
    return {headerContainer, navMenuLinks}
}

export default Header
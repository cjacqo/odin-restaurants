import Nav from '../components/Nav'

const Header = () => {
    const headerContainer = document.createElement('header')
    headerContainer.appendChild(Nav())
    return headerContainer
}

export default Header
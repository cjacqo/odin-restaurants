import TitleBox from "../elements/TitleBox"

const Header = (data) => {
    const { title, subtitle } = data
    const header = document.createElement('header')
    header.classList.add('page-header')
    const contentContainer = document.createElement('div')
    contentContainer.classList.add('content-container', 'container')
    const titleContainer = TitleBox(title, subtitle)
    contentContainer.appendChild(titleContainer)
    header.appendChild(contentContainer)
    return header
}

export default Header
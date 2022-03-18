import TitleBox from "../elements/TitleBox"

const Header = (data) => {
    const { title, subtitle, img } = data
    const header = document.createElement('header')
    header.classList.add('page-header', 'flex', 'col', 'white', 'overlay-image')
    console.log(img)
    header.style.backgroundImage = `url('${img}')`
    const contentContainer = document.createElement('div')
    contentContainer.classList.add('content-container', 'container')
    const titleContainer = TitleBox(title, subtitle)
    contentContainer.appendChild(titleContainer)
    header.appendChild(contentContainer)
    return header
}

export default Header
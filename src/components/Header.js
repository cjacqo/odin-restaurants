import TitleBox from "../elements/TitleBox"

const Header = (data) => {
    // Destructure the data
    const { title, subtitle, img } = data
    // Create elements
    const header = document.createElement('header')
    const contentContainer = document.createElement('div')
    // Add class names to elements
    header.classList.add('page-header', 'flex', 'col', 'white', 'overlay-image')
    contentContainer.classList.add('content-container', 'container')
    // Add background img to the header element
    header.style.backgroundImage = `url('${img}')`
    // Create a TitleBox component
    const titleContainer = TitleBox(title, subtitle)
    // Append elements
    contentContainer.appendChild(titleContainer)
    header.appendChild(contentContainer)
    // Return the header
    return header
}

export default Header
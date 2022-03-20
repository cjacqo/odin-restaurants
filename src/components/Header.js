import TitleBox from "../elements/TitleBox"

const Header = (data) => {
    // Create elements
    const header = document.createElement('header')
    const contentContainer = document.createElement('div')
    // Add class names to elements
    header.classList.add('page-header', 'flex', 'col', 'white', 'overlay-image')
    contentContainer.classList.add('content-container', 'container')
    if (data) {
        // Destructure the data
        const { title, subtitle, img } = data
        // Add background img to the header element
        header.style.backgroundImage = `url('${img}')`
        // Create a TitleBox component
        const titleContainer = TitleBox(title, subtitle)
        contentContainer.appendChild(titleContainer)
        // Append elements
        header.appendChild(contentContainer)
    } else {
        header.setAttribute('id', 'aboutHeader')
    }
    // Return the header
    return header
}

export default Header
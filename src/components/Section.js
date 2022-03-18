import TitleBox from "../elements/TitleBox"
import Button from '../elements/Button'
/*
    1 - create a section div and give it a class name
    2 - create a container div for the content and add a class name
    3 - create a title box and a button box (ELEMENTS)
    4 - append elements to the container, append container to section
    5 - return section
*/
const Section = (data) => {
    const { title, subtitle, button } = data
    // 1
    const section = document.createElement('section')
    section.classList.add('home-section')
    // 2
    const container = document.createElement('div')
    container.classList.add('section-container')
    // 3
    const titleContainer = TitleBox(title, subtitle)
    const buttonContainer = Button(button)
    // 4
    container.appendChild(titleContainer)
    container.appendChild(buttonContainer)
    section.appendChild(container)
    return section
}

export default Section
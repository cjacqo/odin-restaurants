import Carousel from "../components/Carousel"
import Header from "../components/Header"

const About = (data) => {
    // 1
    const content = document.getElementById('content')
    // 2
    const header = Header()
    const main    = document.createElement('main')
    main.classList.add('main')
    main.setAttribute('id', 'aboutMain')
    // 3
    const carousel = Carousel(data)
    // 4
    header.appendChild(carousel)
    content.appendChild(header)
}

export default About
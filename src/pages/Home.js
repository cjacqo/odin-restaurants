import Section from '../components/Section'
import SectionOneImg from '../imgs/header/home_section_one.jpg'
import SectionTwoImg from '../imgs/header/home_section_two.jpeg'
import SectionThreeImg from '../imgs/header/home_section_three.png'
/*
    1 - select the div on index.html
    2 - create a main element and give it an id specific to this page
    3 - create components
    4 - append components
    5 - append main container to the content div (page)
*/
const Home = () => {
    // 1
    const content = document.getElementById('content')
    // 2
    const main    = document.createElement('main')
    main.classList.add('main-grid')
    main.setAttribute('id', 'homeMain')
    // 3
    const sectionOne    = Section({ title: 'Celebrate with a toast', subtitle: 'New Iwai of the Tiger cocktail', button: 'Make a Reservation', img: SectionOneImg }, 'home')
    const sectionTwo    = Section({ title: 'Your favorites, brought home', subtitle: 'with Delivery, Curbside Pickup & Takeout', button: 'Order Online', img: SectionTwoImg }, 'home')
    const sectionThree  = Section({ title: 'Introducing the official shop', subtitle: 'Exclusive apparel, accessories & cookware', button: 'Shop Now', img: SectionThreeImg }, 'home')
    // 4
    main.appendChild(sectionOne)
    main.appendChild(sectionTwo)
    main.appendChild(sectionThree)
    // 5
    content.appendChild(main)
}

export default Home
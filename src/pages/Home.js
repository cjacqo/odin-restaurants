import Section from '../components/Section'
/*
    1 - select the div on index.html
    2 - create a main element and give it an id specific to this page
    3 - create components
*/
const Home = () => {
    // 1
    const content = document.getElementById('content')
    // 2
    const main    = document.createElement('main')
    main.classList.add('main-grid')
    main.setAttribute('id', 'homeMain')
    // 3
    const sectionOne    = Section({ title: 'Celebrate with a toast', subtitle: 'New Iwai of the Tiger cocktail', button: 'Make a Reservation' })
    const sectionTwo    = Section({ title: 'Your favorites, brought home', subtitle: 'with Delivery, Curbside Pickup & Takeout', button: 'Order Online'})
    const sectionThree  = Section({ title: 'Introducing the official shop', subtitle: 'Exclusive apparel, accessories & cookware', button: 'Shop Now'})
    // 4
    main.appendChild(sectionOne)
    main.appendChild(sectionTwo)
    main.appendChild(sectionThree)
    // 5
    content.appendChild(main)
}

export default Home
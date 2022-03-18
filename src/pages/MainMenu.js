import Header from "../components/Header"
import HeaderImage from '../imgs/header/main_menu_header_lg.jpg'

const MainMenu = (data) => {
    console.log(data)
    // 1
    const content = document.getElementById('content')
    // 2
    const main    = document.createElement('main')
    main.classList.add('main-flex')
    main.setAttribute('id', 'menuMain')
    // 3
    const header = Header({ title: 'Main Menu', subtitle: 'We make all our food from scratch in each restaurant, every day.', img: HeaderImage })
    // 4
    main.appendChild(header)
    // 5
    content.appendChild(main)
}

export default MainMenu
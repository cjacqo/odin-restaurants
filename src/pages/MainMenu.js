import Header from "../components/Header"
import DropDownMenu from '../elements/DropDownMenu'
import MenuSection from "../components/MenuSection"
import HeaderImage from '../imgs/header/main_menu_header_lg.jpg'

const MainMenu = (data) => {
    // 1
    const content = document.getElementById('content')
    // 2
    const header = Header({ title: 'Main Menu', subtitle: 'We make all our food from scratch in each restaurant, every day.', img: HeaderImage })
    // 3
    const main    = document.createElement('main')
    main.classList.add('main-flex')
    main.setAttribute('id', 'menuMain')
    // main.appendChild(dropDownMenu)
    // 4
    data.forEach(sec => {
        const section = MenuSection(sec)
        console.log(section)
        main.appendChild(section)
    })
    // main.appendChild()
    // 5
    content.appendChild(header)
    content.appendChild(main)
}

export default MainMenu
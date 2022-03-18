import Header from "../components/Header"

const MainMenu = (data) => {
    console.log(data)
    // 1
    const content = document.getElementById('content')
    // 2
    const main    = document.createElement('main')
    main.classList.add('main-flex')
    main.setAttribute('id', 'menuMain')
    // 3
    const header = Header({ title: 'Main Menu', subtitle: 'We make all our food from scratch in each restaurant, every day.'})
    // 4
    main.appendChild(header)
    // 5
    content.appendChild(main)
}

export default MainMenu
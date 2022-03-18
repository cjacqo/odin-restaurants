import '../styles.css'
import MenuData from '../data/menu_data'
import Header from '../layout/Header'

// !!! FIGURE OUT HOW TO TRACK NAVIGATION/TABBING TO
//     CHANGE CONTENT ON THE PAGE


const Dashboard = () => {
    const dashboard = document.getElementById('content')
    const header = Header()
    const { headerContainer, navMenuLinks } = header
    console.log(navMenuLinks)

    // @@@TEST: practice loading assets
    // const myImg = new Image()
    // myImg.src = MenuData[0].items[0].img

    // Create event listeners for the nav menu links
    console.log(MenuData)
    
    dashboard.appendChild(headerContainer)
    return dashboard
}

export default Dashboard
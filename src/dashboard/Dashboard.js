import '../styles.css'
import Header from '../layout/Header'
import Img from '../imgs/img.jpg'


// !!! FIGURE OUT HOW TO TRACK NAVIGATION/TABBING TO
//     CHANGE CONTENT ON THE PAGE


const Dashboard = () => {
    const dashboard = document.getElementById('content')
    const header = Header()
    const { headerContainer, navMenuLinks } = header
    console.log(navMenuLinks)

    // @@@TEST: practice loading assets
    // const myImg = new Image()
    // myImg.src = Img

    // Create event listeners for the nav menu links
    
    
    dashboard.appendChild(headerContainer)
    return dashboard
}

export default Dashboard
import Header from '../layout/Header'
import Img from '../imgs/img.jpg'


// !!! FIGURE OUT HOW TO TRACK NAVIGATION/TABBING TO
//     CHANGE CONTENT ON THE PAGE


const Dashboard = () => {
    const dashboard = document.getElementById('content')
    const header = Header()

    // @@@TEST: practice loading assets
    // const myImg = new Image()
    // myImg.src = Img
    
    dashboard.appendChild(header)
    return dashboard
}

export default Dashboard
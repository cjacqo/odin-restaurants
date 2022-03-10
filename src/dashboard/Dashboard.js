import Header from '../layout/Header'
import Img from '../imgs/img.jpg'

const Dashboard = () => {
    const dashboard = document.createElement('div')

    // @@@TEST: practice loading assets
    const myImg = new Image()
    myImg.src = Img
    
    dashboard.appendChild(Header())
    dashboard.appendChild(myImg)
    return dashboard
}

export default Dashboard
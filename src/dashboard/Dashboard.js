import Header from '../layout/Header'

const Dashboard = () => {
    const dashboard = document.createElement('div')
    dashboard.appendChild(Header())
    return dashboard
}

export default Dashboard
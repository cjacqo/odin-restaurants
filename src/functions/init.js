import { Nav } from '../components/Nav'
import render from './render'

// Loads the homepage on first load by calling render() with no param
const init = function() {
    const content = document.getElementById('content')
    // append nav
    const navigation = Nav()
    content.appendChild(navigation)
    // call page content
    render()
}

export default init
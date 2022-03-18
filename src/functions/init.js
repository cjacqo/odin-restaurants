import Nav from '../components/Nav'
import Home from '../pages/Home'

// Loads the homepage on first load
/*
    1 - get the div from index.html
    2 - create a navigation and append to the div
    3 - call the home page
    4 - load the page (timeouts for any transitions/side effects/animations)
*/
const init = function() {
    // 1
    const content    = document.getElementById('content')
    // 2
    const navigation = Nav()
    content.appendChild(navigation)
    // 3
    Home()
}

export default init
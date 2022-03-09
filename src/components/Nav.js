const Nav = () => {
    let isOpen = false
    const container = document.createElement('div')

    container.style.height = '100px'

    function changeHeight(dif) {
        let currentHeight = container.style.height
        console.log(currentHeight)
    }

    container.addEventListener('click', () => {
        isOpen = !isOpen
        let dif = isOpen ? 100 : -100
        changeHeight(dif)

    })

    container.style.backgroundColor = 'green'
    return container
}

export default Nav
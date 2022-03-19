function toggleMenu(open) {
    const ul = document.querySelector('.drop-down-list-container')
    if (open) {
        ul.style.pointerEvents = 'auto'
        ul.style.transform = 'translateY(0)'
        ul.style.opacity = '1'
    } else {
        ul.style.pointerEvents = 'none'
        ul.style.transform = 'translateY(-10px)'
        ul.style.opacity = '0'
    }
}

const DropDownMenu = (data) => {
    let isClicked = false
    const container = document.createElement('div')
    const button    = document.createElement('button')
    const ul        = document.createElement('ul')

    container.classList.add('menu-sections-drop-down-menu-container', 'drop-down-container')
    button.classList.add('drop-down-menu-title')
    ul.classList.add('menu-sections-list-container', 'drop-down-list-container')

    data.forEach(item => {
        const listItem = document.createElement('li')
        const listLink = document.createElement('a')
        listItem.classList.add('drop-down-list-item', 'pointer')
        listLink.setAttribute('href', `#${item.id}LinkTag`) 
        listLink.innerText = item.section
        listLink.addEventListener('click', (e) => {
            isClicked = false
            toggleMenu(isClicked)
        })
        listItem.appendChild(listLink)
        ul.appendChild(listItem)
    })

    button.innerText = 'Menu'
    button.addEventListener('click', () => {
        isClicked = !isClicked
        toggleMenu(isClicked)
    })

    container.appendChild(button)
    container.appendChild(ul)

    return container
}

export default DropDownMenu
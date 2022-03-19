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
        listItem.classList.add('drop-down-list-item', 'pointer')
        listItem.innerText = item.section
        ul.appendChild(listItem)
    })

    button.innerText = 'Menu'
    button.addEventListener('click', () => {
        isClicked = !isClicked
        ul.style.pointerEvents = isClicked ? 'auto' : 'none'
        ul.style.transform = isClicked ? 'translateY(0)' : 'translateY(-10px)'
        ul.style.opacity = isClicked ? '1' : '0'
    })

    container.appendChild(button)
    container.appendChild(ul)

    return container
}

export default DropDownMenu
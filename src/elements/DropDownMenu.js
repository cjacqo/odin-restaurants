const DropDownMenu = () => {
    const container = document.createElement('div')
    const button    = document.createElement('button')
    const ul        = document.createElement('ul')

    container.classList.add('menu-sections-drop-down-menu-container', 'drop-down-container')
    button.classList.add('drop-down-menu-title')
    ul.classList.add('menu-sections-list-container', 'drop-down-list-container')

    container.appendChild(button)
    container.appendChild(ul)
    
    return container
}

export default DropDownMenu
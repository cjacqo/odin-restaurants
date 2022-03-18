const MenuSection = (data) => {
    const { section, items, header_img } = data
    const sectionContainer = document.createElement('section')
    sectionContainer.classList.add('menu-section')
    const sectionHead = document.createElement('header')
    sectionHead.classList.add('section-head')
    sectionHead.setAttribute('id', `${section.toLowerCase()}Header`)
    sectionHead.style.backgroundImage = `url('${header_img}')`
    const titleContainer = document.createElement('div')
    titleContainer.classList.add('menu-section-title-container', 'white')
    const titleText = document.createElement('h3')
    titleText.classList.add('menu-section-title-text')
    titleText.innerText = section
    titleContainer.appendChild(titleText)
    sectionHead.appendChild(titleContainer)
    sectionContainer.appendChild(sectionHead)

    // Create a container then loop over the items to append components to the container
    
    return sectionContainer
}

export default MenuSection
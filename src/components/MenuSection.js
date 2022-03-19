const MenuItem = (item) => {
    // Destructure the item (menu item with items details)
    const { title, description, spicy, vegetarian, gfo, options, img } = item

    // Create containers and elements
    const itemContainer        = document.createElement('div')      // parent
    const topBar               = document.createElement('div')      // top bar parent
    const bottomBar            = document.createElement('div')      // bottom bar parent
    const itemTitle            = document.createElement('a')        // item title as a link
    const iconsContainer       = document.createElement('div')      // container for spicy, veg and gf icons
    const descriptionContainer = document.createElement('div')      // container for description and options text if it exists
    const itemDescription      = document.createElement('p')        // text for item description

    // Add universal class names for global style settings, class names for menu item container
    itemContainer.classList.add('menu-item-container', 'flex', 'col')
    topBar.classList.add('menu-item-title-icons-container', 'flex')
    bottomBar.classList.add('menu-item-description-container', 'flex', 'col')
    iconsContainer.classList.add('menu-item-icons-container', 'flex')
    descriptionContainer.classList.add('menu-item-description-wrapper')
    itemTitle.classList.add('food-item-title', 'pointer')
    // Add the text to the necessary elements
    itemTitle.innerText        = title
    itemDescription.innerText  = description
    // Initital appending of elements that are guaranteed to exist
    descriptionContainer.appendChild(itemDescription)
    topBar.appendChild(itemTitle)
    bottomBar.appendChild(descriptionContainer)

    // Conditions to create icons, add classes, and append icon to the icon container
    //     as well as check if 'options' text exist to then append to descriptionContainer
    //     if it exists
    if (spicy) {
        const spicyIcon = document.createElement('i')
        spicyIcon.classList.add('fa-solid', 'fa-fire', 'icon')
        iconsContainer.appendChild(spicyIcon)
    } 
    if (vegetarian) {
        const vegIcon = document.createElement('i')
        vegIcon.classList.add('fa-solid', 'fa-leaf', 'icon')
        iconsContainer.appendChild(vegIcon)
    } 
    if (gfo) {
        const gfoIcon = document.createElement('p')
        gfoIcon.classList.add('gfo', 'icon')
        gfoIcon.innerText = 'GFO'
        iconsContainer.appendChild(gfoIcon)
    } 
    if (options) {
        const optionsText = document.createElement('p')
        optionsText.classList.add('options-text')
        optionsText.innerText = options
        descriptionContainer.appendChild(optionsText)
    }
    // Condition if any of the above checks are true, append the iconsContainer
    //     to the topBar
    if (spicy || vegetarian || gfo) {
        topBar.appendChild(iconsContainer)
    }
    
    // Append completed topBar and bottomBar to the itemContainer
    itemContainer.appendChild(topBar)
    itemContainer.appendChild(bottomBar)

    // Return itemContainer
    return itemContainer
}

const MenuSection = (data) => {
    // Desctructure data of the menu section
    const { section, items, header_img } = data

    // Create containers and elements
    const sectionContainer     = document.createElement('section')         // section parent container
    const sectionHead          = document.createElement('header')          // section header
    const titleContainer       = document.createElement('div')             // section title container
    const titleText            = document.createElement('h3')              // title text element
    const sectionListContainer = document.createElement('div')             // menu items list container

    // Add universal class names for global style settings, 
    //      class names for menu item container, and id's
    //      from section name (section)
    sectionContainer.classList.add('menu-section')
    sectionHead.classList.add('section-head')
    sectionHead.setAttribute('id', `${section.toLowerCase()}Header`)
    titleContainer.classList.add('menu-section-title-container', 'white')
    titleText.classList.add('menu-section-title-text')
    sectionListContainer.classList.add('menu-list-container', 'flex', 'col')
    sectionListContainer.setAttribute('id', `${section.toLowerCase()}ListContainer`)

    // Add background image to the sectionHead container
    sectionHead.style.backgroundImage = `url('${header_img}')`

    // Insert title to the titleText element
    titleText.innerText = section

    // Append necessary children to their parents
    titleContainer.appendChild(titleText)
    sectionHead.appendChild(titleContainer)
    sectionContainer.appendChild(sectionHead)

    // Loop over the items, for each item create a MenuItem
    //      to append components to the container
    items.forEach(item => {
        const itemContainer = MenuItem(item)
        console.log(itemContainer)
        sectionListContainer.appendChild(itemContainer)
    })

    // Append the sectionListContainer to the sectionContainer
    sectionContainer.appendChild(sectionListContainer)

    // Return the sectionContainer
    return sectionContainer
}

export default MenuSection
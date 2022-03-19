const TitleBox = (title, subtitle) => {
    // Create container elements
    const container = document.createElement('div')
    const titleText = document.createElement('h1')
    const subtitleText = document.createElement('h6')
    // Add class names
    container.classList.add('text-container', 'flex', 'col')
    titleText.classList.add('title-text')
    subtitleText.classList.add('sub-title-text')
    // Insert title to the titleText element and append
    titleText.innerText = title
    container.appendChild(titleText)
    // Check if a subtitle exists
    //      TRUE: insert subtitle to the subtitleText element and append
    if (subtitle) {
        subtitleText.innerText = subtitle
        container.appendChild(subtitleText)
    }
    // Return container
    return container
}

export default TitleBox
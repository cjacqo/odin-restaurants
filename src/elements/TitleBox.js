const TitleBox = (title, subtitle) => {
    const container = document.createElement('div')
    container.classList.add('text-container')

    const titleText = document.createElement('h1')
    const subtitleText = document.createElement('h6')
    titleText.classList.add('title-text')
    subtitleText.classList.add('sub-title-text')

    titleText.innerText = title
    container.appendChild(titleText)
    if (subtitle) {
        subtitleText.innerText = subtitle
        container.appendChild(subtitleText)
    }
    return container
}

export default TitleBox
const Button = (btnText) => {
    // Create container and element
    const container = document.createElement('div')
    const btn = document.createElement('button')
    // Add class names
    container.classList.add('button-container')
    btn.classList.add('primary-btn', 'pointer')
    // Insert text to the button
    btn.innerText = btnText
    // Add event listener here that calls a function
    
    // Append button to the container
    container.appendChild(btn)
    // Return the container
    return container
}

export default Button
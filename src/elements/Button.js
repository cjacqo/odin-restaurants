const Button = (btnText) => {
    const container = document.createElement('div')
    container.classList.add('button-container')
    const btn = document.createElement('button')
    btn.classList.add('primary-btn')
    btn.innerText = btnText
    // event listener hear that calls a function
    container.appendChild(btn)
    return container
}

export default Button
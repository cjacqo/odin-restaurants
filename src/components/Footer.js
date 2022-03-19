import { HorizontalNav } from "./Nav"

const SocialBox = () => {
    const socialIconsCN     = ['fa-facebook-f', 'fa-twitter', 'fa-instagram']
    const container         = document.createElement('div')
    const orderContainer    = document.createElement('div')
    const iconContainer     = document.createElement('div')
    const orderButton       = document.createElement('button')
    const socialIcons       = socialIconsCN.map(icon => {
        const element       = document.createElement('i')
        element.classList.add('fa-brands', icon)
        return element
    })

    container.classList.add('social-box-container', 'flex', 'col')
    orderContainer.classList.add('order-btn-container')
    iconContainer.classList.add('social-icons-container', 'flex')
    orderButton.classList.add('secondary-btn')

    orderButton.innerText = 'Order online'

    socialIcons.forEach(icon => {
        iconContainer.appendChild(icon)
    })
    orderContainer.appendChild(orderButton)
    container.appendChild(orderContainer)
    container.appendChild(iconContainer)

    return container
}

const Footer = () => {
    // Create containers, elements and components
    const footer            = document.createElement('footer')
    const contentContainer  = document.createElement('div')
    const hzNav             = HorizontalNav()
    const socialBox         = SocialBox()

    // Add classes
    contentContainer.classList.add('footer-content-container', 'flex', 'col')

    // Append elements
    contentContainer.appendChild(hzNav)
    contentContainer.appendChild(socialBox)
    footer.appendChild(contentContainer)

    // Return footer
    return footer
}

export default Footer
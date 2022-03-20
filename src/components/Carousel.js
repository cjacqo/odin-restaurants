import Section from "./Section"

function modulo(num, mod) {
    let result = num % mod
    if (result < 0) {
        result += mod
    }
    return result
}

function changeSlide(slideNum) {
    const carouselContainer = document.querySelector('.carousel-container')
    carouselContainer.style.setPropter('--current-slide', slideNum)
}

const CarouselSlides = (data) => {
    const container = document.createElement('div')
    container.classList.add('slides-container')
    data.forEach(item => {
        const slide = Section(item, 'about')
        slide.classList.add('slide')
        container.appendChild(slide)
    })
    return container
}

const CarouselButtons = (num) => {
    const container = document.createElement('div')
    container.classList.add('carousel-buttons-container')
    for (let i = 0; i < num; i++) {
        const button = document.createElement('input')
        button.classList.add('carousel-btn')
        button.setAttribute('type', 'radio')
        button.setAttribute('value', i)

        button.addEventListener('click', (e) => {
            e.stopPropagation()
            changeSlide(i)
        })
        
        container.appendChild(button)
    }
    return container
}

const Carousel = (data) => {
    // State
    const currentSlide = 0
    const numSlides = data.length


    const carouselContainer = document.createElement('div')
    const carouselButtonsContainer = CarouselButtons(3)
    const carouselSlidesContainer = CarouselSlides(data)
    carouselContainer.classList.add('carousel-container')
    carouselContainer.appendChild(carouselButtonsContainer)
    carouselContainer.appendChild(carouselSlidesContainer)

    return carouselContainer
}

export default Carousel
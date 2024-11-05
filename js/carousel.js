const defineElements = (ellementClassName) => {
    return document.querySelectorAll(`.${ellementClassName}`)
}

// constructor
function GetElements(ellementClassName) {
    this.slideIndex = 1
    this.elementsArray = document.querySelectorAll(`.${ellementClassName}`)

    this.showAllElements = () => {
        this.elementsArray.forEach((item) => {
            item.style.opacity = "1"
        })
    }
    this.showElement = (n) => {

        if (n > this.elementsArray.length) {
            this.slideIndex = 1
        }
        if (n < 1) {
            this.slideIndex = this.elementsArray.length
        }

        for (let element of this.elementsArray) {
            element.style.opacity = "0"
        }
        this.elementsArray[this.slideIndex - 1].style.opacity = "1"
    }

    this.nextElement = () => {
        this.showElement(this.slideIndex += 1)
    }

    this.previousElement = () => {
        this.showElement(this.slideIndex -= 1)
    }

    this.carouselCallback = (e) => {

        if (e.offsetX >= this.elementsArray[0].offsetWidth / 2) {
            this.nextElement()
        }
        else {
            this.previousElement()
        }
    }

    this.applyCarousel = () => {
        this.elementsArray.forEach((item) => {
            item.addEventListener("click", this.carouselCallback)
        })
    }

    this.removeCarousel = () => {
        console.log(1)
        this.elementsArray.forEach((item) => {
            item.removeEventListener("click", this.carouselCallback)
        })
    }
}



const elements = new GetElements('main__popular-image');
const elements1 = new GetElements('main__blog-article');
const elements2 = new GetElements('main__photo-grid-item');

const isMobile = () => {
    return (window.innerWidth <= 550) ? true : false
}

const applyOnMobile = (boolean) => {
    if (boolean) {
        elements.showElement(1)
        elements.applyCarousel()
        elements1.showElement(1)
        elements1.applyCarousel()
        elements2.showElement(1)
        elements2.applyCarousel()
    }
    else {
        elements.showAllElements()
        elements1.showAllElements()
        elements2.showAllElements()
        elements.removeCarousel()
        elements1.removeCarousel()
        elements2.removeCarousel()
    }
}
applyOnMobile(isMobile())


window.onresize = () => {
    applyOnMobile(isMobile())
}
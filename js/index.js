const findProgrammForm = document.querySelector(".header__hero-form")
const mobileSandwich = document.querySelector(".header__navigation-nav-mobile")
const mobileSlide = document.querySelector(".header__navigation-nav-mobile__sandwich")
const mobileCross = document.querySelector(".header__navigation-nav-mobile__sandwich-cross")
const feedbackWrapper = document.querySelector(".main__feedback-wrapper")

const handleFormSubmission = (e) => {
    e.preventDefault()
    console.log(1)
}

const handeClick = (position) => {
    mobileSlide.style.top = position

}

findProgrammForm.addEventListener("submit", handleFormSubmission)
mobileSandwich.addEventListener("click", () => { handeClick("0") })
mobileCross.addEventListener("click", () => { handeClick("-300px") })





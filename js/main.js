// Testimonial slider
let slider     = document.querySelector(".slider"),
    slides     = slider.querySelectorAll(".slide"),
    sliderNav  = slider.querySelector(".slider__nav"),
    slideCount = slides.length
// Add slider navigation items
for (let i = 0; i < slideCount; i++) {
    sliderNav.innerHTML += `<span class="slider__nav-item"></span>`
}
// Get slider nav items
let sliderNavItems = sliderNav.querySelectorAll(".slider__nav-item")
// Slider navigation
sliderNavItems.forEach( (item, index) => {
    item.onclick = () => {
        for (let i = 0; i < slideCount; i++) {
            slides[i].classList.remove("active")
            sliderNavItems[i].classList.remove("active")
        }
        slides[index].classList.add("active")
        item.classList.add("active")
    }
})
// Activate first slide and navigation item
slides[0].classList.add("active")
sliderNavItems[0].classList.add("active")





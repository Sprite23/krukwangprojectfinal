new CircleType(document.querySelector('.header'));
new CircleType(document.querySelector('.portfolio'));
ScrollReveal().reveal('.header', { delay: 300 });
ScrollReveal().reveal('.headertitle h1', { delay: 300 });
ScrollReveal().reveal('.headertitle h3', { delay: 500 });
ScrollReveal().reveal('.card', { interval: 700 });
ScrollReveal().reveal('.tall', { interval: 700 });
ScrollReveal().reveal('.big', { interval: 500 });
ScrollReveal().reveal('.wide', { interval: 900 });
ScrollReveal().reveal('.carouselId', { interval: 900 });

function slidesPlugin(activeSlide = 0) {
    const slides = document.querySelectorAll(".slide");

    slides[activeSlide].classList.add("active");

    for (const slide of slides) {
        slide.addEventListener("click", () => {
            clearActiveClasses();

            slide.classList.add("active");
        });
    }

    function clearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });
    }
}

slidesPlugin();

options = {
    "cursorOuter": "enable",
    "hoverEffect": "pointer-overlay",
    "hoverItemMove": false,
    "defaultCursor": false,
    "outerWidth": 60,
    "outerHeight": 60
};
magicMouse(options);
LottieInteractivity.create({
    mode: "scroll",
    player: '#firstLottie',
    actions: [{
        visibility: [0, 1],
        type: "seek",
        frames: [0, 90],
    }, ]
});
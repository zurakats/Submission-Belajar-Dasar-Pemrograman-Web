let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;

    const offset = -currentSlide * 100;
    document.querySelector(".slides").style.transform = `translateX(${offset}vw)`;
}

function moveSlide(step) {
    showSlide(currentSlide + step);
}

showSlide(0);






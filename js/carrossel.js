const carousel = document.querySelector(".carousel");
let currentSlide = 0;
const totalSlides = document.querySelectorAll(".slide").length;

function moveLeft() {
  currentSlide = currentSlide > 0 ? currentSlide - 1 : totalSlides - 1;
  updateCarousel();
}

function moveRight() {
  currentSlide = currentSlide < totalSlides - 1 ? currentSlide + 1 : 0;
  updateCarousel();
}

function updateCarousel() {
  const offset = -currentSlide * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}

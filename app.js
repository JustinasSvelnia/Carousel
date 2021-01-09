//Variables
const slides = document.getElementsByClassName("carousel-item");
const nextButton = document.getElementById("carousel-button-next");
const previousButton = document.getElementById("carousel-button-prev");
const totalSlides = slides.length;
let slidePosition = 0;

// Event listeners
nextButton.addEventListener("click", moveToNextSlide);
previousButton.addEventListener("click", moveToPreviousSlide);

//Functions
function hideAllSlides() {
  for (let slide of slides) {
    slide.classList.remove("carousel-item-visible");
    slide.classList.add("carousel-item-hidden");
  }
}
function moveToNextSlide() {
  hideAllSlides();

  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  slides[slidePosition].classList.add("carousel-item-visible");
}
function moveToPreviousSlide() {
  hideAllSlides();
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }
  slides[slidePosition].classList.add("carousel-item-visible");
}

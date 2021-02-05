const bgSection = document.getElementById('bg-slider');
const arrowRight = document.getElementById('right');
const arrowLeft = document.getElementById('left');
const slides = document.querySelectorAll('.slide');

let activeSlide = 0;

setBgToBody();
setActiveSlide();

function setBgToBody() {
  bgSection.style.backgroundImage = slides[activeSlide].style.backgroundImage;
  bgSection.style.backgroundPosition = 'center center';
  bgSection.style.backgroundSize = 'cover';
}

function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove('active'));

  slides[activeSlide].classList.add('active');
}

arrowRight.addEventListener('click', () => {
  activeSlide++;
  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }

  setBgToBody();
  setActiveSlide();
});

arrowLeft.addEventListener('click', () => {
  activeSlide--;
  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }

  setBgToBody();
  setActiveSlide();
});

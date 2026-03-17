const trackClases = document.querySelector('.carousel-trackVClases');
const videosVClases = document.querySelectorAll('.carousel-trackVClases video');
const prevBtnVClases = document.querySelector('.carouselVClases .prev');
const nextBtnVClases = document.querySelector('.carouselVClases .next');

let indexVClases = 0;

function updateCarouselVClases() {
  videosVClases.forEach(video => video.pause())
  const slideWidth = document.querySelector('.carouselVClases ').offsetWidth;
  trackClases.style.transform = `translateX(-${indexVClases * slideWidth}px)`;
}

nextBtnVClases.addEventListener('click', () => {
  if (indexVClases < videosVClases.length - 1) {
    indexVClases++;
    updateCarouselVClases();
  }
});

prevBtnVClases.addEventListener('click', () => {
  if (indexVClases > 0) {
    indexVClases--;
    updateCarouselVClases();
  }
});

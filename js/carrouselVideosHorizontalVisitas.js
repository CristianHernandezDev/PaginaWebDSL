const trackH = document.querySelector('.carousel-trackH');
const videosH = document.querySelectorAll('.carousel-trackH video');
const prevBtnH = document.querySelector('.carouselH .prev');
const nextBtnH = document.querySelector('.carouselH .next');

let indexH = 0;

function updateCarouselH() {
  // Pausar todos los videos al cambiar
  videosH.forEach(video => video.pause());

  const slideWidth = trackH.parentElement.offsetWidth;
  trackH.style.transform = `translateX(-${indexH * slideWidth}px)`;
}

nextBtnH.addEventListener('click', () => {
  if (indexH < videosH.length - 1) {
    indexH++;
    updateCarouselH();
  }
});

prevBtnH.addEventListener('click', () => {
  if (indexH > 0) {
    indexH--;
    updateCarouselH();
  }
});

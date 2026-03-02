const track2 = document.querySelector('.carousel-trackV');
const videosV = document.querySelectorAll('.carousel-trackV video');
const prevBtnV = document.querySelector('.carouselV .prev');
const nextBtnV = document.querySelector('.carouselV .next');

let indexV = 0;

function updateCarousel() {
  videosV.forEach(video => video.pause()) 
  const slideWidth = document.querySelector('.carouselV').offsetWidth;
  track2.style.transform = `translateX(-${indexV * slideWidth}px)`;
}


nextBtnV.addEventListener('click', () => {
  if (indexV < videosV.length - 1) {
    indexV++;
    updateCarousel();
  }
});

prevBtnV.addEventListener('click', () => {
  if (indexV > 0) {
    indexV--;
    updateCarousel();
  }
});

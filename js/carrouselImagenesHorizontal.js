const trackImg = document.querySelector('.carousel-track');
const images = document.querySelectorAll('.carousel-track img');
const prevBtnImg = document.querySelector('.carousel .prev');
const nextBtnImg = document.querySelector('.carousel .next');

let indexImg = 0;

function updateCarouselImg() {
  const slideWidth = trackImg.parentElement.offsetWidth;
  trackImg.style.transform = `translateX(-${indexImg * slideWidth}px)`;
}

nextBtnImg.addEventListener('click', () => {
  if (indexImg < images.length - 1) {
    indexImg++;
    updateCarouselImg();
  }
});

prevBtnImg.addEventListener('click', () => {
  if (indexImg > 0) {
    indexImg--;
    updateCarouselImg();
  }
});

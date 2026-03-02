const trackImgClase = document.querySelector('.carousel-trackImagenesClases');
const imagesClase = document.querySelectorAll('.carousel-trackImagenesClases img');
const prevBtnImgClase = document.querySelector('.carouselImagenesClases .prev');
const nextBtnImgClase = document.querySelector('.carouselImagenesClases .next');

let indexImgClase = 0;

function updateCarouselImg() {
  const slideWidth = trackImgClase.parentElement.offsetWidth;
  trackImgClase.style.transform = `translateX(-${indexImgClase * slideWidth}px)`;
}

nextBtnImgClase.addEventListener('click', () => {
  if (indexImgClase < imagesClase.length - 1) {
    indexImgClase++;
    updateCarouselImg();
  }
});

prevBtnImgClase.addEventListener('click', () => {
  if (indexImgClase > 0) {
    indexImgClase--;
    updateCarouselImg();
  }
});
const trackTestimonios = document.querySelector('.carousel-trackVTestimonios');
const videosVTestimonios = document.querySelectorAll('.carousel-trackVTestimonios video');
const prevBtnVTestimonios = document.querySelector('.carouselVTestimonios .prev');
const nextBtnVTestimonios = document.querySelector('.carouselVTestimonios .next');

let indexVTestimonios = 0;

function updateCarouselVTestimonios() {
  videosVTestimonios.forEach(video => video.pause())
  const slideWidth = document.querySelector('.carouselVTestimonios ').offsetWidth;
  trackTestimonios.style.transform = `translateX(-${indexVTestimonios * slideWidth}px)`;
}

nextBtnVTestimonios.addEventListener('click', () => {
  if (indexVTestimonios < videosVTestimonios.length - 1) {
    indexVTestimonios++;
    updateCarouselVTestimonios();
  }
});

prevBtnVTestimonios.addEventListener('click', () => {
  if (indexVTestimonios > 0) {
    indexVTestimonios--;
    updateCarouselVTestimonios();
  }
});

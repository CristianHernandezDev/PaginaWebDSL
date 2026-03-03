const header1 = document.querySelector('header');
const menu1 = document.querySelector('.menu');
const overlay1 = document.querySelector('.transition-overlay');

function ajustarOverlay() {
  const headerHeight = header1.offsetHeight;
  const menuHeight = menu1.offsetHeight;
  overlay1.style.top = (headerHeight + menuHeight) + 'px';
  overlay1.style.height = `calc(100% - ${headerHeight + menuHeight}px)`;
}

window.addEventListener('resize', ajustarOverlay);
ajustarOverlay();

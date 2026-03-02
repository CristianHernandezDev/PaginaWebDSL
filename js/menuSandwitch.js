const menu = document.getElementById('mainMenu');
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('open');
});

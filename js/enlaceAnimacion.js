document.querySelectorAll('.enlace-animacion').forEach(enlace => {
  enlace.addEventListener('click', function(e) {
    e.preventDefault(); // evita que el navegador cambie de página inmediatamente
    const overlay = document.querySelector('.overlay');
    overlay.classList.add('show');

    // espera la animación y luego abre el enlace
    setTimeout(() => {
      window.location.href = this.href;
    }, 500); // mismo tiempo que el transition en CSS
  });
});

window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});


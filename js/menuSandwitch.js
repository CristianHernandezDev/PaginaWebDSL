const menu = document.getElementById('mainMenu');
const hamburger = document.getElementById('hamburger');
const links = document.querySelectorAll('.menu a');

// Abrir/cerrar menú hamburguesa
hamburger.addEventListener('click', () => {
  menu.classList.toggle('open');
});

// Al hacer clic en un enlace: marcarlo y cerrar menú
links.forEach(link => {
  link.addEventListener('click', () => {
    // quitar active de todos
    links.forEach(l => l.classList.remove('active'));
    // añadir active al clicado
    link.classList.add('active');
    // cerrar menú hamburguesa
    menu.classList.remove('open');
  });
});

// Scrollspy: marcar enlace según sección visible
const sections2 = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  let current = "";
  sections2.forEach(section => {
    const sectionTop = section.offsetTop - 100; // compensar menú
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  links.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});



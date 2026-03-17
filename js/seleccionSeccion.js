const sections = document.querySelectorAll("section"); // tus secciones con id
const navLinks = document.querySelectorAll(".menu a");

// Observer para detectar qué sección está en pantalla
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // quitar active de todos
        navLinks.forEach(link => link.classList.remove("active"));
        // buscar el enlace que apunta a la sección visible
        const id = entry.target.getAttribute("id");
        const activeLink = document.querySelector(`.menu a[href="#${id}"]`);
        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    });
  },
  { threshold: 0.6 } // 60% visible para marcar como activa
);

// observar cada sección
sections.forEach(section => observer.observe(section));

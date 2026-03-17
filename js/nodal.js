const modal = document.getElementById("modal");
const modalImagen = document.getElementById("modalImagen");
const cerrar = document.querySelector(".cerrar");

// Selecciona todas las imágenes con la clase .abrirModal
const imagenes = document.querySelectorAll(".abrirModal");

// Recorre cada imagen y le asigna el evento
imagenes.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";   // muestra el modal
    modalImagen.src = img.src;      // carga la imagen seleccionada
    document.body.classList.add("no-scroll"); // bloquea scroll
  });
});

// Cerrar modal
cerrar.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.classList.remove("no-scroll");
});

// Cerrar al hacer clic fuera del contenido
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    document.body.classList.remove("no-scroll");
  }
});

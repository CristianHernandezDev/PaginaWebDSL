document.addEventListener("DOMContentLoaded", () => {
  const labels = document.querySelectorAll('.label');
  const infoBoxes = document.querySelectorAll('.info-box');

  labels.forEach(label => {
    label.addEventListener('click', () => {
      // Oculta todas las cajas
      infoBoxes.forEach(box => box.style.display = 'none');

      // Muestra la caja correspondiente
      const targetId = label.getAttribute('data-target');
      const targetBox = document.getElementById(targetId);
      if (targetBox) {
        targetBox.style.display = 'block';
      }
    });
  });
});

// Selecciona todos los videos
const videos = document.querySelectorAll('.video');

videos.forEach(video => {
  video.addEventListener('play', () => {
    // Cuando un video empieza a reproducirse, pausa los demás
    videos.forEach(otherVideo => {
      if (otherVideo !== video) {
        otherVideo.pause();
      }
    });
  });
});

var konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
var konamiIndex = 0;

window.addEventListener('keydown', function(event) {
  if (event.key === konamiCode[konamiIndex]) {
    konamiIndex++;
    if (konamiIndex === konamiCode.length) {
      document.body.classList.add('la-plateforme-style');
    }
  } else {
    konamiIndex = 0;
  }
});

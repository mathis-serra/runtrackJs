window.addEventListener('scroll', function() {
  var scrollTop = window.scrollY;
  var documentHeight = document.body.clientHeight - window.innerHeight;
  var scrollPercentage = (scrollTop / documentHeight) * 100;
  var progressBar = document.getElementById('progress-bar');
  progressBar.style.width = scrollPercentage + '%';
  
  // Mettre à jour la couleur du footer en fonction du pourcentage de défilement
  var color = getColorForPercentage(scrollPercentage);
  document.getElementById('footer').style.backgroundColor = color;
});

// Fonction pour déterminer la couleur en fonction du pourcentage
function getColorForPercentage(percentage) {
  if (percentage < 25) {
    return '#ff0000'; // Rouge
  } else if (percentage < 50) {
    return '#ff6600'; // Orange
  } else if (percentage < 75) {
    return '#ffff00'; // Jaune
  } else {
    return '#4caf50'; // Vert
  }
}

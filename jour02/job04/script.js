document.addEventListener('keydown', function(event) {
    var textarea = document.getElementById('keylogger');
    var key = event.key.toLowerCase(); // Convertir en minuscule pour uniformiser
  
    // Vérifier si la touche pressée est une lettre de l'alphabet (a-z)
    if (/^[a-z]$/.test(key)) {
      // Si le focus est dans le textarea, ajouter la lettre deux fois
      if (document.activeElement === textarea) {
        textarea.value += key + key;
      } else {
        textarea.value += key;
      }
    }
  });

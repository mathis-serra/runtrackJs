document.addEventListener('keydown', function(event) {
    var textarea = document.getElementById('keylogger');
    var key = event.key.toLowerCase(); 

    if (/^[a-z]$/.test(key)) {
      
      if (document.activeElement === textarea) {
        textarea.value += key;
      } else {
        textarea.value += key;
      }
    }
  });

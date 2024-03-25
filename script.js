var txt = "Welcome to my web resume! I'm a technology enthusiast and software developer based in Ribes de Freser, Catalonia. Currently studying Web Application Development at Cívitanum Institute in Torelló. Excited about the future and eager to connect with you!";

var speed = 10; // Velocidad de la animación

function typeWriter() {
  var i = 0;
  var container = document.getElementById('text');
  container.innerHTML = ""; // Limpiar el contenido del contenedor

    function addChar() {
        if (i < txt.length) {
            if (txt.charAt(i) === ' ' || txt.charAt(i) === ';') {
                container.innerHTML += txt.charAt(i);
            } else {
                container.innerHTML += txt.charAt(i);
            }
            i++;
            setTimeout(addChar, speed); // Llama recursivamente a la función después de un intervalo de tiempo
        } else {

            // Cuando se completa la animación, crear y agregar un botón
            container.innerHTML += "<br>";
      var button = document.createElement("button");
      button.textContent = "EXPLORE MORE";
      button.className = "button-54"; // Agrega la clase CSS al botón
      button.style.fontFamily = "Open Sans, sans-serif !important"; // Establece la fuente del botón con !important
      button.style.fontSize = "16px !important"; // Establece el tamaño de fuente del botón con !important
      button.style.letterSpacing = "2px !important"; // Establece el espaciado de letras del botón con !important
      button.style.textDecoration = "none !important"; // Establece la decoración de texto del botón con !important
      button.style.textTransform = "uppercase !important"; // Establece la transformación de texto del botón con !important
      button.style.color = "#000 !important"; // Establece el color de texto del botón con !important
      button.style.cursor = "pointer !important"; // Establece el cursor del botón con !important
      button.style.border = "3px solid !important"; // Establece el borde del botón con !important
      button.style.padding = "0.25em 0.5em !important"; // Establece el relleno del botón con !important
      button.style.boxShadow = "1px 1px 0px #fff, 2px 2px 0px #fff, 3px 3px 0px #fff, 4px 4px 0px #fff, 5px 5px 0px #fff !important"; // Establece la sombra del botón con !important
      button.style.position = "relative !important"; // Establece la posición del botón con !important
      button.style.userSelect = "none !important"; // Establece la selección de usuario del botón con !important
      button.style.webkitUserSelect = "none !important"; // Establece la selección de usuario de WebKit del botón con !important
      button.style.touchAction = "manipulation !important"; // Establece la acción táctil del botón con !important
      button.onclick = function() {
        window.location.href = "portfolio.html";
        // Aquí puedes poner cualquier acción que desees realizar al hacer clic en el botón
      };
      container.appendChild(button);
    }
  }

  addChar();
}


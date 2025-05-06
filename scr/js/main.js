const palabras = ["Julian Ortega", "Wed Developer", "full-stack in process", "Tech Nerd "];
  const span = document.getElementById("changing-word");
  let index = 0;

  function cambiarPalabra() {
    span.style.opacity = 0;
    setTimeout(() => {
      span.textContent = palabras[index];
      span.style.opacity = 1;
      index = (index + 1) % palabras.length;
    }, 500);
  }

  cambiarPalabra();
  setInterval(cambiarPalabra, 3000);
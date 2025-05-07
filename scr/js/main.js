document.addEventListener("DOMContentLoaded", () => {
    new TypeIt("#changing-word", {
      strings: ["Julian Ortega", "Web Developer", "Full-Stack in process", "Tech Nerd"],
      speed: 100,
      breakLines: false,
      loop: true,
      deleteSpeed: 50,
      waitUntilVisible: true,
    }).go();
  
    // Parallax olas
    const escenaOlas = document.getElementById('olas');
    if (escenaOlas) {
      new Parallax(escenaOlas);
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader");
  
    // Mostrar loader al inicio
    loader.classList.remove("loader-hidden");
  
    // Ocultar después de un delay (simula tiempo de carga)
    setTimeout(() => {
      loader.classList.add("loader-hidden");
    }, 2000);
  
    // Navegación interna con efecto de loader
    const links = document.querySelectorAll("a");
  
    links.forEach(link => {
      link.addEventListener("click", e => {
        const href = link.getAttribute("href");
  
        if (href && href !== "#" && !href.startsWith("http")) {
          e.preventDefault();
          loader.classList.remove("loader-hidden");
  
          setTimeout(() => {
            window.location.href = href;
          }, 1200); // Tiempo de transición de salida
        }
      });
    });
  });
  
  
  
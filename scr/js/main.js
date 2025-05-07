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
  
  
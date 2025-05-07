export function initParallax() {
  const escenaOlas = document.getElementById("olas");
  if (escenaOlas) {
    new Parallax(escenaOlas);
  }
}

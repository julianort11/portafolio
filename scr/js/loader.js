export function initLoader() {
    const loader = document.getElementById("loader");
  
    if (!loader) return;
  
    // Mostrar al inicio
    loader.classList.remove("loader-hidden");
  
    setTimeout(() => {
      loader.classList.add("loader-hidden");
    }, 2000);
  
    // Enlaces internos
    const links = document.querySelectorAll("a");
  
    links.forEach(link => {
      const href = link.getAttribute("href");
  
      if (href && href !== "#" && !href.startsWith("http")) {
        link.addEventListener("click", e => {
          e.preventDefault();
          loader.classList.remove("loader-hidden");
  
          setTimeout(() => {
            window.location.href = href;
          }, 1200);
        });
      }
    });
  }
  
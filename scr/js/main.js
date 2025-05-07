import { startTypingEffect } from "./typingEffect.js";
import { initParallax } from "./parallaxOlas.js";
import { initLoader } from "./loader.js";

document.addEventListener("DOMContentLoaded", () => {
  startTypingEffect();
  initParallax();
  initLoader();
});

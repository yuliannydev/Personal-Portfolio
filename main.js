import "./style.css";

/* Menú mobile */
const toggleButton = document.querySelector(".hamburguer");

const menuHamburguer = document.querySelector(".menu");

toggleButton.addEventListener("click", () => {
  menuHamburguer.classList.toggle("active-hamburger");
});

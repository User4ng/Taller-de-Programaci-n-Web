//boton hamburguesa
const btnMenuToggle = document.querySelector(".nav-menu-toggle");

//barra de menu
const navMenu = document.querySelector(".nav-menu");

//evento para detectar el clic sobre el boton hamburguesa
btnMenuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});
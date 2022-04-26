let mostrar = true;

const menu = document.querySelector(".menu");
const menuSecreto = menu.querySelector(".menu-secreto");

menuSecreto.addEventListener("click", () => {
    document.body.style.overflow = mostrar ? "hidden" :"initial";
    menu.classList.toggle("on", mostrar)
    mostrar = !mostrar;
})
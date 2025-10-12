const menuBurger = document.querySelector(".btn-burger");
const overlay = document.querySelector(".overlay");
// const navLinks = document.querySelector(".nav-links");
const closeMenu = document.querySelector(".close");

function abriMenu(abrir) {
    overlay.classList.toggle("abrir", abrir);
    menuBurger.setAttribute("aria-expanded", String(abrir));
    overlay.setAttribute("aria-hidden", String(!abrir))
    document.body.style.overflow = abrir === true ?
    "hidden" : "";
}

// menuBurger.addEventListener("click", () => {
//     navLinks.classList.toggle("active");
// });

menuBurger.addEventListener('click',()=>abriMenu(true));
closeMenu.addEventListener('click',()=>abriMenu(false));
document.addEventListener('keydown',e=>{ if(e.key==='Escape') abriMenu(false); });

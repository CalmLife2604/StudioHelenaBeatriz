const hb = document.querySelector(".hb");
const navMenu = document.querySelector(".navMenu");

hb.addEventListener("click", () => {
    hb.classList.toggle('active');
    navMenu.classList.toggle('active');

})
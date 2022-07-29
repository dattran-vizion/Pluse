const hamburgerIcon = document.querySelector(".menu-btn");
const overlay = document.querySelector(".overlay");
const mobileNav = document.querySelector(".mobile-nav");
const body = document.getElementsByTagName("body")[0];

hamburgerIcon.addEventListener("click", isToggledMenu);

function isToggledMenu() {
  hamburgerIcon.classList.toggle("isToggled");
  overlay.classList.toggle("isToggled");
  mobileNav.classList.toggle("isToggled");
  body.classList.toggle("isToggled");
}

const nav = document.querySelector("nav");
var mblNav = document.querySelector("nav.mobile-nav");
var menuIcon = document.querySelector(".menu-icon");
var closeIcon = document.querySelector(".close-icon");
var mblMenuContainer = document.querySelector(".mobileMenuContainer");
window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    nav.classList.add("scrolled");
    mblNav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
    mblNav.classList.remove("scrolled");
  }
});
menuIcon.addEventListener("click", () => {
  mblMenuContainer.classList.add("active");
});
closeIcon.addEventListener("click", () => {
  mblMenuContainer.classList.remove("active");
});

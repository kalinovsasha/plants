const burger = document.querySelector(".header-burger");
const nav = document.querySelector(".nav");
const html = document.querySelector("html");
const headerBurger = document.querySelector(".header-burger");
const headerBurgerLine = document.querySelector(".header-burger__line");

burger.onclick = () => {
    nav.classList.toggle("nav_hidden");
};

html.addEventListener("click", (e) => {
  if (
    e.target != nav &&
    e.target != headerBurger &&
    e.target != headerBurgerLine
  ) {
    nav.classList.add("nav_hidden");
  }
});

import "normalize.css";
import "../styles/main.css";
import main from "./assets/main.jpg";
import createMenu from "./components/menu";
import createContact from "./components/contact";

const menu = document.getElementById("menu");
const contact = document.getElementById("contact");
const mainImg = document.getElementById("mainImg");
const homeMain = document.querySelector(".home-main");

mainImg.src = main;

menu.addEventListener("click", () => {
  homeMain.style.opacity = "0";
  contact.style.opacity = "0";
  createMenu();
});

contact.addEventListener("click", () => {
  homeMain.style.opacity = "0";
  menu.style.opacity = "0";
  createContact();
});

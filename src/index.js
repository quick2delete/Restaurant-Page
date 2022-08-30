import "normalize.css";
import "../styles/main.css";
import main from "./assets/main.jpg";
import createMenu from "./components/menu.js";

const menu = document.getElementById("menu");
const mainImg = document.getElementById("mainImg");
const homeMain = document.querySelector(".home-main");

mainImg.src = main;

menu.addEventListener("click", () => {
  homeMain.style.opacity = "0";
  createMenu();
});

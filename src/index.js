import "normalize.css";
import "../styles/main.css";
import main from "./assets/main.jpg";
import createMenu from "./components/menu.js";

const menu = document.getElementById("menu");
const mainImg = document.getElementById("mainImg");

mainImg.src = main;

menu.addEventListener("click", createMenu);

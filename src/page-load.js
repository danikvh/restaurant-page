import './style.css';
import backgroundImage from './assets/background.jpg';
import {loadHome} from "./pages/home";
import loadMenu from "./pages/menu"

function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    const headline = document.createElement('h1');
    headline.textContent = "Restaurante Ristorante";
    headline.classList.add("headline");

    header.appendChild(headline);
    header.appendChild(createNav());

    return header;
}

function createMain() {
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");
    return main;
}

function createNav() {
    const box = document.createElement("div");
    const homeButton = document.createElement("button");
    const menuButton = document.createElement("button");
    const aboutButton = document.createElement("button");

    box.classList.add("button-box");
    homeButton.textContent = "Home";
    menuButton.textContent = "Menu";
    aboutButton.textContent = "About";

    homeButton.addEventListener("click", (event) => {
        loadHome();
    });
    menuButton.addEventListener("click", (event) => {
        loadMenu();
    });

    box.appendChild(homeButton);
    box.appendChild(menuButton);
    box.appendChild(aboutButton);

    return box;
}

function initWebsite() {
    const content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createMain());

    loadHome();
}

export {
    initWebsite
};
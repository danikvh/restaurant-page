import './style.css';
import restaurantImage from './assets/restaurant.jpg';
import backgroundImage from './assets/background.jpg';
import {loadHome} from "./pages/home";

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

    homeButton.textContent = "Home";
    menuButton.textContent = "Menu";
    aboutButton.textContent = "About";

    box.appendChild(homeButton);
    box.appendChild(menuButton);
    box.appendChild(aboutButton);

    return box;
}

function initWebsite() {
    const content = document.getElementById("content");

    const image = new Image(250, 200);
    image.src = restaurantImage;

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(image);

    loadHome();
}

export {
    initWebsite
};
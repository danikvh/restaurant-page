import restaurantImage from '../assets/restaurant.jpg';

function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");

    const textbox = document.createElement("div");
    const presentation = document.createElement("p");
    presentation.textContent = "The best German food you can eat " +    
        "in an Italian English-speaking restaurant at Spain!"
    textbox.appendChild(presentation);
    textbox.classList.add("textbox");

    const image = new Image();
    image.src = restaurantImage;
    image.classList.add("img-home");

    home.appendChild(textbox);
    home.appendChild(image);

    return home;
}

function loadHome() {
    const main = document.getElementById("main");
    main.appendChild(createHome());
}

export {
    loadHome
}
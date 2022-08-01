import restaurantImage from '../assets/restaurant.jpg';

function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");

    const presentation = document.createElement("p");
    presentation.textContent = "The best German food you can eat " +    
        "in an Italian English-speaking restaurant at Spain!"

    const image = new Image(250, 200);
    image.src = restaurantImage;

    home.appendChild(presentation);
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
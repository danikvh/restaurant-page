function createAbout() {
    const about = document.createElement("div");
    about.classList.add("about");

    const headline = document.createElement('h2');
    headline.textContent = "Contact us!";

    const textbox = document.createElement("div");
    textbox.classList.add("textabout");

    const phone = document.createElement("p");
    phone.textContent = "Phone: +34 123 456 789";
    textbox.appendChild(phone);

    const direction = document.createElement("p");
    direction.textContent = "Direction: Calle La Havana 24, Murcia, Murcia";
    textbox.appendChild(direction);

    about.appendChild(headline);
    about.appendChild(textbox);

    return about;
}

function loadAbout() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createAbout());
}

export default loadAbout;
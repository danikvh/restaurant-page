function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    const headline = document.createElement('h3');
    headline.textContent = "Menu";
    headline.classList.add("menu-headline");

    const textbox = document.createElement("div");
    textbox.classList.add("textmenu");
    textbox.appendChild(createParagraph("1. Wurst"));
    textbox.appendChild(createParagraph("2. Roualden"));
    textbox.appendChild(createParagraph("3. Käsespätzle"));
    textbox.appendChild(createParagraph("4. Eintopf"));
    textbox.appendChild(createParagraph("5. Sauerbraten"));

    menu.appendChild(headline);
    menu.appendChild(textbox);

    return menu;
}

function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
}

function createParagraph(text) {
    const par = document.createElement("p");
    par.textContent = text;
    return par;
}

export default loadMenu;
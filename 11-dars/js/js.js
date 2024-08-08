let navElements = ["Home", "Product", "About", "Contact"];

let body = document.querySelector("body");

let header = document.querySelector("#header");
let container = document.createElement("div");
let innerHeader = document.createElement("div");
let logo = document.createElement("a");
let logoImg = document.createElement("img");
let list = document.createElement("ul");

let tablet = document.createElement("div");
let burger = document.createElement("img");
let login = document.createElement("a");
let loginList = document.createElement("a");

container.className = "container";
innerHeader.className = "header";

logo.className = "header__logo";
logo.href = "/";

logoImg.src = "./images/logo.svg";
logoImg.alt = "Logo";
logoImg.width = "186";
logoImg.height = "58";

list.className = "header__list"

navElements.forEach(item => {
    let listItem = document.createElement("li");
    let listLink = document.createElement("a");

    listLink.className = "header__link"
    listLink.textContent = item;
    listLink.href = "#";
    listItem.appendChild(listLink);
    list.appendChild(listItem)
})


login.className = "header__login";
login.textContent = "Login";
login.href ="/";

loginList.className = "header__login2";
loginList.textContent = "login";
loginList.href ="/";

burger.className = "header__burger";
burger.src = "./images/burger.png";
burger.alt = "Burger";
burger.width ="66";
burger.height = "53";

tablet.className = "tablet";

header.appendChild(container);
container.appendChild(innerHeader);
tablet.append(login, burger)
list.appendChild(loginList)
innerHeader.append(logo, list, tablet);

logo.append(logoImg);

// Hero

let heroWrapper = document.querySelector("#hero");
let hero = document.createElement("div");
let heroTitle = document.createElement("h1");
let heroText = document.createElement("p");
let heroButtons = document.createElement("div");
let heroTryFree = document.createElement("a");
let heroLearnMore = document.createElement("a");
let heroImage = document.createElement("img");

let heroImageWrapper = document.querySelector("#hero__wrapper")


hero.className = "hero";
heroWrapper.appendChild(hero);

heroTitle.className = "hero__title";
heroTitle.textContent = "Work at the speed of thought"
hero.appendChild(heroTitle);

heroText.className = "hero__text";
heroText.textContent = "Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule."
hero.appendChild(heroText);

heroButtons.className = "hero__links";
hero.appendChild(heroButtons);

heroTryFree.className = "hero__try";
heroTryFree.textContent = "Try For Free";
heroTryFree.href = "#";
heroButtons.appendChild(heroTryFree);

heroLearnMore.className = "hero__learn";
heroLearnMore.textContent = "Learn More";
heroLearnMore.href = "#";
heroButtons.appendChild(heroLearnMore);

heroImage.className = "hero__img";
heroImage.src = "./images/hero-bg.png";
heroImage.alt = "Image";
heroImageWrapper.appendChild(heroImage);


heroWrapper.appendChild(container);
container.appendChild(hero)

// Hero End

burger.addEventListener("click", ()=>{
    list.classList.toggle("open");
    body.classList.toggle("scroll")
})

const saladsLink = document.getElementById("salads-link");
const pizzaLink = document.getElementById("pizza-link");
const appetizerLink = document.getElementById("appetizer-link");
const dessertLink = document.getElementById("dessert-link");
const drinksLink = document.getElementById("drinks-link");
const menuList = document.getElementById("menu-list");
var lastScrollPos = 0;

$(menuList).ready(function() {
    var scroll_pos = 0;
    $(menuList).scroll(function() {
      scroll_pos = $(this).scrollTop();

      var saladsThreshold;
      var pizzaThreshold;
      var appetizerThreshold;
      var dessertThreshold;

      if (scroll_pos > lastScrollPos) {
        saladsThreshold = 246;
        pizzaThreshold = 739;
        appetizerThreshold = 1109;
        dessertThreshold = 1210;
      }
      else {
          saladsThreshold = 123;
          pizzaThreshold = 493;
          appetizerThreshold = 862;
          dessertThreshold = 1134;
      }

      if (scroll_pos < saladsThreshold) {
        saladsLink.classList.add("active");
        pizzaLink.classList.remove("active");
        appetizerLink.classList.remove("active");
        dessertLink.classList.remove("active");
        drinksLink.classList.remove("active");
        lastScrollPos = scroll_pos;
        return;
      }

      if (scroll_pos < pizzaThreshold) {
        saladsLink.classList.remove("active");
        pizzaLink.classList.add("active");
        appetizerLink.classList.remove("active");
        dessertLink.classList.remove("active");
        drinksLink.classList.remove("active");
        lastScrollPos = scroll_pos;
        return;
      }

      if (scroll_pos < appetizerThreshold) {
        saladsLink.classList.remove("active");
        pizzaLink.classList.remove("active");
        appetizerLink.classList.add("active");
        dessertLink.classList.remove("active");
        drinksLink.classList.remove("active");
        lastScrollPos = scroll_pos;
        return;
      }

      if (scroll_pos < dessertThreshold) {
        saladsLink.classList.remove("active");
        pizzaLink.classList.remove("active");
        appetizerLink.classList.remove("active");
        dessertLink.classList.add("active");
        drinksLink.classList.remove("active");
        lastScrollPos = scroll_pos;
        return;
      }

      saladsLink.classList.remove("active");
      pizzaLink.classList.remove("active");
      appetizerLink.classList.remove("active");
      dessertLink.classList.remove("active");
      drinksLink.classList.add("active");
      lastScrollPos = scroll_pos;
      return;
    });
  });

function addDishesCard(type, name, price, img, func) {
    var cardTitle = document.createElement("h3");
    var text = document.createTextNode(name);
    cardTitle.appendChild(text);
    cardTitle.setAttribute("class", "card-title");

    var cardPrice = document.createElement("p");
    text = document.createTextNode(price.toFixed(2) + "лв");
    cardPrice.appendChild(text);
    cardPrice.setAttribute("class", "card-price");

    var cardBody = document.createElement("div");
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardPrice);
    cardBody.setAttribute("class", "card-body");

    var cardImg = document.createElement("img");
    cardImg.setAttribute("src", img);
    cardImg.setAttribute("alt", name);
    cardImg.setAttribute("class", "card-img-top");

    var card = document.createElement("div");
    card.appendChild(cardImg);
    card.appendChild(cardBody);
    card.setAttribute("class", "card");
    //card.onclick = openDishInfo();
    card.setAttribute("onclick",func);

    var element = document.getElementById(type);
    element.appendChild(card);
}

function fillDishes(event) {
    addDishesCard("salads", "Шопска салата", 5.70, "../images/shopska-salata.png", "openShopskaSalata();");
    addDishesCard("salads", "Шопска салата", 5.70, "../images/shopska-salata.png");
    addDishesCard("salads", "Шопска салата", 5.70, "../images/shopska-salata.png");
    addDishesCard("salads", "Шопска салата", 5.70, "../images/shopska-salata.png");
    addDishesCard("pizza", "Шопска салата", 5.70, "../images/shopska-salata.png");
    addDishesCard("pizza", "Шопска салата", 5.70, "../images/shopska-salata.png");
    addDishesCard("pizza", "Шопска салата", 5.70, "../images/shopska-salata.png");
    addDishesCard("pizza", "Шопска салата", 5.70, "../images/shopska-salata.png");
    addDishesCard("pizza", "Шопска салата", 5.70, "../images/shopska-salata.png");
    addDishesCard("appetizer", "Шопска салата", 5.70, "../images/shopska-salata.png");
    addDishesCard("appetizer", "Шопска салата", 5.70, "../images/shopska-salata.png");
    addDishesCard("appetizer", "Шопска салата", 5.70, "../images/shopska-salata.png");
    
    addDishesCard("dessert", "Карамел", 5.60, "../images/desserts-caramel.png", "openCaramel();");
    addDishesCard("dessert", "Ядки", 2.80, "../images/desserts-nuts.png", "openNuts();");
    addDishesCard("dessert", "Тирамису", 4.80, "../images/desserts-tiramisu.png", "openTiramisu();");
    addDishesCard("dessert", "Баклава", 4.10, "../images/desserts-turkish.png", "openTurkish();");

    addDishesCard("drinks", "Кафе", 2.30, "../images/drinks-coffee.png", "openCoffee();");
    addDishesCard("drinks", "Минерална вода", 2.10, "../images/drinks-mineral-water.png", "openWater();");
    addDishesCard("drinks", "Кола", 2.20, "../images/drinks-cola.png", "openCola();");
    addDishesCard("drinks", "Уиски", 5.60, "../images/drinks-whiskey-jack.png", "openWhiskey();");
    addDishesCard("drinks", "Бира", 2.00, "../images/drinks-beer-stella.png", "openBeer();");
    addDishesCard("drinks", "Мохито", 7.10, "../images/drinks-cocktail-mojito.png", "openMojito();");
    addDishesCard("drinks", "Лимонада", 1.70, "../images/drinks-lemonade.png", "openLemonade();");
    addDishesCard("drinks", "Швепс", 1.80, "../images/drinks-schweppes.png", "openSchweppes();");
}

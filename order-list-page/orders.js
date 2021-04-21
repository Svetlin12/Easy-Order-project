$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#menu-center a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu-center ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}

function addDishesCard(type, name, price, img) {
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

    var element = document.getElementById(type);
    element.appendChild(card);
}

function fillDishes(event){
    addDishesCard("salads", "Шопска салата", 5.70, "../images/shopska-salata.png");
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
    addDishesCard("dessert", "Шопска салата", 5.70, "../images/shopska-salata.png");
    addDishesCard("dessert", "Шопска салата", 5.70, "../images/shopska-salata.png");
    addDishesCard("dessert", "Шопска салата", 5.70, "../images/shopska-salata.png");
    addDishesCard("drinks", "Шопска салата", 5.70, "../images/shopska-salata.png");
    addDishesCard("drinks", "Шопска салата", 5.70, "../images/shopska-salata.png");
    addDishesCard("drinks", "Шопска салата", 5.70, "../images/shopska-salata.png");
}
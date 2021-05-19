var dishList;
function addDish(i, dish) {
    if (dish == null) return;
    var dishName = document.createElement("h2");
    var text = document.createTextNode(dish.name);
    dishName.appendChild(text);

    var priceText = document.createElement("h2");
    text = document.createTextNode("Цена");
    priceText.appendChild(text);

    var priceNumber = document.createElement("h2");
    text = document.createTextNode(dish.price);
    priceNumber.appendChild(text);



    var dishPrice = document.createElement("div");
    dishPrice.setAttribute("class", "one-line");
    dishPrice.appendChild(priceText);
    dishPrice.appendChild(priceNumber);

    var dishText = document.createElement("div");
    dishText.setAttribute('class', 'dish-text');
    dishText.appendChild(dishName);
    dishText.appendChild(dishPrice);



    var dishImg = document.createElement("img");
    dishImg.setAttribute("src", dish.image);
    dishImg.setAttribute("alt", dish.name);
    dishImg.setAttribute("class", "dish-img");

    var removeImg = document.createElement("img");
    removeImg.setAttribute("src", '../images/remove.png');
    removeImg.setAttribute("alt", 'Премахване');
    removeImg.setAttribute("class", "remove-img");


    var dishInfo = document.createElement("div");
    dishInfo.setAttribute('class', 'dish-info');
    dishInfo.setAttribute('id', i);
    dishInfo.appendChild(dishImg);
    dishInfo.appendChild(dishText);
    dishInfo.appendChild(removeImg);
    removeImg.setAttribute("onclick", "removeDish(" + i + ")");


    document.getElementById('dishes-list').appendChild(dishInfo);
}

function removeDish(i) {
    console.log(i)
    var current = parseFloat(document.getElementById("new-bill").innerText);
    var discount = parseFloat(dishList[i].price);;
    console.log(current - discount);
    setSums(current - discount);
    document.getElementById('dishes-list').removeChild(document.getElementById(i));
    delete dishList[i];
    localStorage.setItem('card', JSON.stringify(dishList));

}



function fillCard() {
    document.getElementById("current-bill").innerText = localStorage.getItem("finalBill");

    dishList = JSON.parse(localStorage.getItem('card'));
    var price = 0;
    for (i in dishList) {
        if (dishList[i] == null) continue;
        price += parseFloat(dishList[i].price);
        addDish(i, dishList[i]);
    }
    setSums(price);
}

function doOrder() {
    localStorage.setItem("finalBill", document.getElementById("final").innerText);
    localStorage.setItem('card', "[]");
    var list = document.getElementById('dishes-list')
    while (list.lastElementChild) {
        list.removeChild(list.lastElementChild);
    }

    document.getElementById("current-bill").innerText = document.getElementById("final").innerText;
    document.getElementById("new-bill").innerText = 0.00;
    document.getElementById("discount").innerText = 0.00;

}


function setSums(price) {
    document.getElementById("new-bill").innerText = price.toFixed(2);
    var discount = (price * 10 / 100).toFixed(2);
    document.getElementById("discount").innerText = discount;
    var current = parseFloat(document.getElementById("current-bill").innerText);

    var finalSum = (current + price - discount).toFixed(2);
    document.getElementById("final").innerText = finalSum;

}

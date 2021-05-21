var dishList;
function addDish(i, dish) {
    if (dish == null) return;
    var dishName = document.createElement("h2");
    var text = document.createTextNode(dish.name);
    dishName.appendChild(text);

    var priceText = document.createElement("h2");
    text = document.createTextNode("Цена:");
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
    const waitForUserInput = new Promise((resolve, reject) => {
        var isUserSure = null;
        document.getElementById("confirm-message-container").classList.add("visible");
        document.getElementById("dishes-list").classList.add("hide-scrollbar");
    
        const confirmButton = document.getElementById("confirm-button");
        const denyButton = document.getElementById("deny-button");
    
        // invoke only once
        confirmButton.addEventListener('click', () => {
            isUserSure = true;
            resolve(isUserSure);
        }, {once: true});
        
        // invoke only once
        denyButton.addEventListener('click', () => {
            isUserSure = false;
            resolve(isUserSure);
        }, {once: true});
    })

    waitForUserInput.then((response) => {
        document.getElementById("confirm-message-container").classList.remove("visible");
        document.getElementById("dishes-list").classList.remove("hide-scrollbar");
        if (response == false) {
            return;
        }

        var current = parseFloat(document.getElementById("new-bill").innerText);
        var discount = parseFloat(dishList[i].price);;
        setSums(current - discount);
        document.getElementById('dishes-list').removeChild(document.getElementById(i));
        delete dishList[i];
        localStorage.setItem('card', JSON.stringify(dishList));
    })
}


function fillCard() {
    var finalBill = localStorage.getItem("finalBill");
    if (finalBill == null) {
        finalBill = "0.00";
    }
    document.getElementById("current-bill").innerText = finalBill;

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

    var areThereProducts = true;
    if (list.childElementCount == 0) {
        areThereProducts = false;
    }


    while (list.lastElementChild) {
        list.removeChild(list.lastElementChild);
    }

    var startingPrice = 0;
    document.getElementById("current-bill").innerText = document.getElementById("final").innerText;
    document.getElementById("new-bill").innerText = startingPrice.toFixed(2);
    document.getElementById("discount").innerText = startingPrice.toFixed(2);

    if (areThereProducts) {
        const responseDiv = document.getElementById("response");
        responseDiv.classList.add("show-popup");
    
        // waits untill all animations have finished, then removes the class from the class list
        Promise.all(
            responseDiv.getAnimations().map(
                function(animation) {
                    return animation.finished;
                }
            )
        )
        .then(
            function() {
                responseDiv.classList.remove("show-popup");
            }
        )
    }
}

function setSums(price) {
    document.getElementById("new-bill").innerText = price.toFixed(2);
    var discount = (price * 10 / 100).toFixed(2);
    document.getElementById("discount").innerText = discount;
    var current = parseFloat(document.getElementById("current-bill").innerText);

    var finalSum = (current + price - discount).toFixed(2);
    document.getElementById("final").innerText = finalSum;

}

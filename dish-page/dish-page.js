function addToCard() {
    if(localStorage.getItem('card') === null) {
        localStorage.setItem('card', "[]")
    }
    var card = JSON.parse(localStorage.getItem('card'));

    var img = document.getElementById("dish-img").getAttribute("src");
    var name = document.getElementById("dish-name").innerText;
    var price = document.getElementById("dish-price").innerText;
    card.push({
        image: img,
        name: name,
        price: price
    });

    console.log(card)
    localStorage.setItem('card', JSON.stringify(card))
}
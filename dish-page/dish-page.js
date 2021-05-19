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

    localStorage.setItem('card', JSON.stringify(card));

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
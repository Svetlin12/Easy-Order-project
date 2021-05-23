function fillCurrentBill() {
    const currentBillField = document.getElementById("current-bill");
    currentBillField.innerText = localStorage.getItem("finalBill");

    const cashButton = document.getElementById("cash");

    cashButton.addEventListener("click", () => {
        if (currentBillField.innerText == "0.00") {
            return;
        }

        currentBillField.innerText = "0.00";
        localStorage.setItem("finalBill", "0.00");
        
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
    });
}
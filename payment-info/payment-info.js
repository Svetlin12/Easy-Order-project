function fillCurrentBill() {
    document.getElementById("current-bill").innerText = localStorage.getItem("finalBill");
}
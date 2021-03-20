function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - (button.offsetLeft + radius)}px`; // determine the amount of pixels that is between the center and the mouse click and offset the span to that value
    circle.style.top = `${event.clientY - (button.offsetTop + radius)}px`; // same principal as above
    circle.classList.add("ripple");

    const previousRipples = document.getElementsByClassName("ripple")[0];
    if (previousRipples) {
        previousRipples.remove();
    }

    button.appendChild(circle);
}

const buttons = document.getElementsByTagName("button");
for (const button of buttons) {
    if (button.id != "lang-button") {
        button.addEventListener('click', createRipple);
    }
}
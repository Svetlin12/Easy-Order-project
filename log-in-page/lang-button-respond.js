const langButton = document.getElementById("lang-button");
const logInButton = document.getElementById("log-in");
const registrationButton = document.getElementById("registration");
const guestLogInButton = document.getElementById("guest-log-in");
const introVideoButton = document.getElementById("intro-video-button");
const callWaiterButton = document.getElementById("call-waiter");
const contactsButton = document.getElementById("contacts");
const aboutUsButton = document.getElementById("about-us");


langButton.addEventListener('click', (event) => {
    if (langButton.innerText == "EN") {
        langButton.innerText = "БГ";
        logInButton.innerText = "Log in";
        registrationButton.innerText = "Register";
        guestLogInButton.innerText = "Log in as guest";
        introVideoButton.innerText = "Watch intro video";
        callWaiterButton.innerText = "Call waiter";
        contactsButton.innerText = "Contacts";
        aboutUsButton.innerText = "About us";
    }
    else {
        langButton.innerText = "EN";
        logInButton.innerText = "Вход";
        registrationButton.innerText = "Регистрация";
        guestLogInButton.innerText = "Продължи като гост";
        introVideoButton.innerText = "Гледане на интро клип";
        callWaiterButton.innerText = "Повикване на сервитьор";
        contactsButton.innerText = "Контакти";
        aboutUsButton.innerText = "За нас";
    }

    createRipple(event);

    event.preventDefault();
});
var body = document.querySelector("body");
var menu = document.querySelector(".menu");
var button = document.querySelector(".navigation__btn");

button.addEventListener("click", function (evt) {
    evt.preventDefault();
    menu.classList.toggle("visually_hidden");
    button.classList.toggle("close-btn");
    body.classList.toggle("overflow-hidden")
});
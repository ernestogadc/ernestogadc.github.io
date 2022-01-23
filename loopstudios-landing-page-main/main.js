var burger = document.getElementById("burger");
var close = document.getElementById("close");
var menu = document.getElementById("menu");

burger.addEventListener("click", () => {
    burger.style.display = "none"
    menu.style.left = "0"
    close.style.display = "flex"
})

close.addEventListener("click", () => {
    burger.style.display = "flex"
    menu.style.left = "100%"
    close.style.display = "none"
})
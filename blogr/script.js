const burgerMenu = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const btnDrop = document.querySelectorAll(".dropBtn");
const content = document.querySelectorAll(".dropContent");
const burgerClose = document.getElementById("burgerClose");
const s = document.getElementById("closed");
const s1 = document.getElementById("closed1");
const s2 = document.getElementById("closed2");
const editor = document.getElementById("editor");
const phone = document.getElementById("phone");
const circle = document.getElementById("circle");
const laptop = document.getElementById("laptop");


burgerMenu.addEventListener("click", function() {
    for (let bt of btnDrop) {
        bt.children[0].classList.remove("arrowTurn");
        console.log(bt)
    }
    for (let cont of content) {
        cont.classList.remove("contentShow")
    }
    menu.classList.toggle("open");
    s.classList.toggle("closed");
    s1.classList.toggle("closed1");
    s2.classList.toggle("closed2");

    /* if (menu.classList.contains("open")) {
        burgerClose.src = ("./images/icon-close.svg");
    } else {
        burgerClose.src = ("./images/icon-hamburger.svg");
    } */
});

for (let btn of btnDrop) {
    btn.addEventListener("click", function() {
        for (let bt of btnDrop) {
            bt.children[0].classList.remove("arrowTurn");
        }
        if (this.nextElementSibling.classList.contains("contentShow")) {
            this.nextElementSibling.classList.remove("contentShow");
            this.children[0].classList.toggle("arrowTurn");
        } else {
            for (let cont of content) {
                cont.classList.remove("contentShow")
            }
            this.nextElementSibling.classList.add("contentShow");
        }
        this.children[0].classList.toggle("arrowTurn");
    })
}

function myFunction(x) {
    if (x.matches) { // If media query matches
        editor.src = "/images/illustration-editor-desktop.svg";
        laptop.src = "/images/illustration-laptop-desktop.svg";
    } else {
        editor.src = "/images/illustration-editor-mobile.svg";
        laptop.src = "/images/illustration-laptop-mobile.svg";
    }
}

var x = window.matchMedia("(min-width: 800px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
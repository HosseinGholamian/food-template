const icons = document.querySelectorAll(".section-1-icons i");
const menu = document.querySelector(".menu");
const nav = document.querySelector(".navbar");
const target = document.querySelectorAll(".target")
menu.addEventListener("click", () => {
    target.forEach(item => {
        item.classList.toggle("change-menu");
    });
})

let i = 1;
setInterval(function() {
    i++;
    const icone = document.querySelector(".change");

    icone.classList.remove("change")
    if (i > icons.length) {
        icons[0].classList.add("change");
        i = 1;
    } else {

        icone.nextElementSibling.classList.add("change");
    }
}, 4000);
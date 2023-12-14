const hamburgerMenu = document.querySelector(".menu-icon")
const linear = document.getElementById("hide")
const cancelButton = document.getElementById("cancel")
const blockNav = document.getElementById("block")

console.log("blockNav", blockNav)

hamburgerMenu.addEventListener('click', function () {
    linear.classList = "show"
    cancelButton.classList = "position-absolute top-0"
    blockNav.classList = "block"

});

cancelButton.addEventListener('click', function () {
    linear.classList = "d-lg-flex justify-content-between gap-3"
    cancelButton.classList = "hide"
});

const year = new Date().getFullYear()

const date = document.querySelector(".date")
date.textContent = `© All rights reserved ${year.toString()}`

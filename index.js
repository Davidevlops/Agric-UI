const menuIcon = document.querySelector(".menu-icon");
const linear = document.getElementById("hide");
const cancelButton = document.getElementById("cancel");
const blockNav = document.getElementById("block");

menuIcon.addEventListener('click', () => {
    linear.classList = "show";
    cancelButton.classList = "text-white position-absolute top-0";
    blockNav.classList = "block";
});

cancelButton.addEventListener('click', () => {
    linear.classList = "d-lg-flex justify-content-between gap-3";
    cancelButton.classList = "hide";
    blockNav.classList = "d-none d-lg-flex justify-content-between gap-3";
});


const year = new Date().getFullYear()

const date = document.querySelector(".date")
date.textContent = `© All rights reserved ${year.toString()}`

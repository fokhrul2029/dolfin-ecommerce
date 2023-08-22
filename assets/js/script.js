document.addEventListener("DOMContentLoaded", function () {
    const mobileToggle = document.querySelector(".mobile-toggle");
    const menu = document.querySelector(".menu");

    mobileToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});

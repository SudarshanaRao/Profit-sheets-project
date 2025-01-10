// Sign-in and Sign-up button functionality
const signInBtn = document.querySelector("#sign-in-btn");
const signUpBtn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

if (signUpBtn && container) {
    signUpBtn.addEventListener("click", () => {
        container.classList.add("sign-up-mode");
    });
}

if (signInBtn && container) {
    signInBtn.addEventListener("click", () => {
        container.classList.remove("sign-up-mode");
    });
}

// jQuery for search and navigation functionality
$(document).ready(function() {
    $("#search-icon").click(function() {
        $(".nav").toggleClass("search no-search");
        $(".search-input").toggleClass("search-active");
    });

    $(".menu-toggle").click(function() {
        $(".nav").toggleClass("mobile-nav");
        $(this).toggleClass("is-active");
    });
});
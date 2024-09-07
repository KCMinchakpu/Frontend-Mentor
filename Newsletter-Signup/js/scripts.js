"use strict";

const btnSubmit = document.querySelector('.subscribe_btn');
const btnDismiss = document.querySelector('.dismiss_btn');
const formContainer = document.querySelector(".form-container");
const successEl = document.querySelector(".success_message");
const inputEl = document.querySelector("form input");

btnSubmit.addEventListener("click", () => {
    if (inputEl.value !== "") {
        formContainer.classList.add("hidden");
        successEl.classList.remove("hidden");
        document.querySelector(".error p").innerHTML = "";
    } else {
        document.querySelector(".error p").innerHTML = "Valid Email Required";
        inputEl.classList.add("active");
    }
});


btnDismiss.addEventListener("click", () => {
    formContainer.classList.remove("hidden");
    successEl.classList.add("hidden");
    inputEl.value = "";
    inputEl.classList.remove("active");
});

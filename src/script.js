const borderClicked = document.getElementById("border-clicked");
const inputLabel = document.getElementById("lbl-email");
const inputEmail = document.getElementById("in-email");
const warning1 = document.getElementById("warning1");
const warning2 = document.getElementById("warning2");
const number = document.getElementById("number");
const passwordClicked = document.getElementById("password-clicked");
const passwordLabel = document.getElementById("lbl-password");
const password = document.getElementById("password");
const warning3 = document.getElementById("warning3");
const showPassword = document.getElementById("eye-button");
const eyeImg = document.getElementById("eye-img");
import validator from "https://cdn.skypack.dev/validator";

document.addEventListener("DOMContentLoaded", () => {
  window.onload = function() {
    // Check if there is a query string in the URL
    if (window.location.search) {
        // Use the history API to update the URL without reloading the page
        var newUrl = window.location.origin + window.location.pathname;
        window.history.replaceState({}, document.title, newUrl);
    }
}
  borderClicked.addEventListener("click", () => {
    eyeImg.addEventListener("click", () => {
      if (eyeImg.src.endsWith("/assets/eye.svg")) {
        eyeImg.src = "/assets/eye-off.svg";
      } else {
        eyeImg.src = "/assets/eye.svg";
      }
    });
    borderClicked.classList.add(
      "outline-2",
      "outline-fff",
      "outline",
      "outline-offset-2"
    );
    inputEmail.classList.remove("hidden");
    number.classList.remove("hidden");
    inputEmail.focus();
    inputLabel.classList.remove("text-base");
    inputLabel.classList.add("text-[12px]");
    warning2.classList.remove("flex");
    warning2.classList.add("hidden");
    warning1.classList.remove("flex");
    warning1.classList.add("hidden");

    document.addEventListener("click", () => {
      if (
        !borderClicked.contains(event.target) &&
        !inputEmail.contains(event.target) &&
        !passwordClicked.contains(event.target) &&
        !password.contains(event.target)
      ) {
        borderClicked.classList.remove(
          "outline-2",
          "outline-fff",
          "outline",
          "outline-offset-2"
        );
        inputEmail.classList.add("hidden");
        inputLabel.classList.remove("text-[12px]");
        inputLabel.classList.add("text-base");
        if (inputEmail.value === "") {
          warning1.classList.remove("hidden");
          warning1.classList.add("flex");
          warning2.classList.remove("flex");
          warning2.classList.add("hidden");
          number.classList.add("hidden");
        } else if (inputEmail.value !== "") {
          warning2.classList.remove("flex");
          warning2.classList.add("hidden");
          inputEmail.classList.remove("hidden");
          inputLabel.classList.remove("text-base");
          inputLabel.classList.add("text-[12px]");
          if (!validator.isEmail(inputEmail.value)) {
            warning1.classList.remove("flex");
            warning1.classList.add("hidden");
            warning2.classList.remove("hidden");
            warning2.classList.add("flex");
          }
        }
      }
    });
  });
  passwordClicked.addEventListener("click", () => {
    event.preventDefault();
    const eyeOn = new Image();
    eyeOn.src = "/assets/eye.svg";
    const eyeOff = new Image();
    eyeOff.src = "/assets/eye-off.svg";
    showPassword.addEventListener("click", () => {
      if (eyeImg.src.endsWith("/assets/eye.svg")) {
        eyeImg.src = eyeOff.src;
        password.type = "password";
      } else {
        eyeImg.src = eyeOn.src;
        password.type = "text";
      }
    });
    passwordClicked.classList.add(
      "outline-2",
      "outline-fff",
      "outline",
      "outline-offset-2"
    );
    password.classList.remove("hidden");
    password.focus();
    showPassword.classList.remove("hidden");
    showPassword.classList.add("flex");
    passwordLabel.classList.remove("text-base");
    passwordLabel.classList.add("text-[12px]");
    passwordLabel.classList.add("font-medium");
    document.addEventListener("click", () => {
      if (!passwordClicked.contains(event.target)) {
        passwordClicked.classList.remove(
          "outline-2",
          "outline-fff",
          "outline",
          "outline-offset-2"
        );
        showPassword.classList.remove("flex");
        showPassword.classList.add("hidden");
        if (password.value === "") {
          warning3.classList.remove("hidden");
          warning3.classList.add("flex");
          passwordLabel.classList.remove("text-[12px]");
          passwordLabel.classList.add("text-base");
        }
      }
    });
  });
});

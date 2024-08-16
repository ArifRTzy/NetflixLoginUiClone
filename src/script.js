const borderClicked = document.getElementById("border-clicked");
const inputLabel = document.getElementById("lbl-email");
const inputEmail = document.getElementById("in-email");
const warning1 = document.getElementById("warning1");
const warning2 = document.getElementById("warning2");
import validator from "https://cdn.skypack.dev/validator";

document.addEventListener("DOMContentLoaded", () => {
  borderClicked.addEventListener("click", () => {
    borderClicked.classList.add(
      "outline-2",
      "outline-fff",
      "outline",
      "outline-offset-2"
    );
    inputEmail.classList.remove("hidden");
    inputEmail.focus();
    inputLabel.classList.remove("text-base");
    inputLabel.classList.add("text-[12px]");
    warning2.classList.remove("flex")
    warning2.classList.add("hidden");
    warning1.classList.remove("flex");
    warning1.classList.add("hidden");

    document.addEventListener("click", () => {
      if (
        !borderClicked.contains(event.target) &&
        !inputEmail.contains(event.target)
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
        }
        else if(inputEmail.value !== "") {
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
});
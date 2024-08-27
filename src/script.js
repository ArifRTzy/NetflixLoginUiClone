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
const remember = document.getElementById("remember");
const warning4 = document.getElementById("warning4");
const select = document.getElementById("select");
const selectValued = document.getElementById("dropdownValue");
const countryNumber = document.getElementById("countryNumber");
const numberButton = document.getElementById("numberButton");
const opsi = document.querySelectorAll("option");
const lang = document.getElementById("lang");
const langChoose = document.getElementById("langChoose");
import validator from "https://cdn.skypack.dev/validator";

document.addEventListener("DOMContentLoaded", () => {
  window.onload = function () {
    if (window.location.search) {
      var newUrl = window.location.origin + window.location.pathname;
      window.history.replaceState({}, document.title, newUrl);
    }
  };

  borderClicked.addEventListener("click", (event) => {
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
    warning2.classList.remove("flex");
    warning2.classList.add("hidden");
    warning1.classList.remove("flex");
    warning1.classList.add("hidden");
    numberButton.classList.remove("border-white", "border-solid", "border-2");

    inputEmail.addEventListener("input", () => {
      const values = inputEmail.value;
      if (validator.isNumeric(values)) {
        number.classList.remove("hidden");
        number.classList.add("flex");
        numberButton.classList.remove("hidden");
        numberButton.classList.add("flex");
      } else if (!validator.isNumeric(values)) {
        number.classList.remove("flex");
        number.classList.add("hidden");
        numberButton.classList.remove("flex");
        numberButton.classList.add("hidden");
      }
    });

    document.addEventListener("click", (event) => {
      if (
        !borderClicked.contains(event.target) &&
        !inputEmail.contains(event.target) &&
        !passwordClicked.contains(event.target) &&
        !password.contains(event.target) &&
        !number.contains(event.target)
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
        numberButton.classList.remove(
          "border-white",
          "border-solid",
          "border-2"
        );
        if (inputEmail.value === "") {
          warning1.classList.remove("hidden");
          warning1.classList.add("flex");
          warning2.classList.remove("flex");
          warning2.classList.add("hidden");
          warning4.classList.remove("flex");
          warning4.classList.add("hidden");
          number.classList.remove("flex");
          number.classList.add("hidden");
          numberButton.classList.remove("flex");
          numberButton.classList.add("hidden");
        } else if (inputEmail.value !== "") {
          warning2.classList.remove("flex");
          warning2.classList.add("hidden");
          inputEmail.classList.remove("hidden");
          inputLabel.classList.remove("text-base");
          inputLabel.classList.add("text-[12px]");
          if (validator.isNumeric(inputEmail.value)) {
            warning1.classList.remove("flex");
            warning1.classList.add("hidden");
            warning4.classList.remove("hidden");
            warning4.classList.add("flex");
          } else if (!validator.isEmail(inputEmail.value)) {
            warning1.classList.remove("flex");
            warning1.classList.add("hidden");
            warning4.classList.remove("flex");
            warning4.classList.add("hidden");
            warning2.classList.remove("hidden");
            warning2.classList.add("flex");
          }
        }
      }
    });
  });

  number.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    numberButton.classList.add("border-white", "border-solid", "border-2");
    borderClicked.classList.remove(
      "outline-2",
      "outline-fff",
      "outline",
      "outline-offset-2"
    );
  });

  opsi.forEach((option) => {
    const text = option.textContent;
    option.classList.add("text-black");

    const match = text.match(/\+\d+/);

    if (match) {
      option.setAttribute("dataCN", match[0]);
    }
  });

  selectValued.textContent = select.options[0].value;
  countryNumber.textContent = select.options[0].getAttribute("dataCN");
  select.addEventListener("change", () => {
    const selected = select.value;
    const selectCN =
      select.options[select.selectedIndex].getAttribute("dataCN");
    selectValued.textContent = selected;
    countryNumber.textContent = selectCN;
  });

  passwordClicked.addEventListener("click", (event) => {
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
    passwordLabel.classList.add("items-center");
    warning3.classList.remove("flex");
    warning3.classList.add("hidden");
    document.addEventListener("click", (event) => {
      if (!passwordClicked.contains(event.target)) {
        passwordClicked.classList.remove(
          "outline-2",
          "outline-fff",
          "outline",
          "outline-offset-2"
        );
        showPassword.classList.remove("flex");
        showPassword.classList.add("hidden");
        if (password.value == "") {
          warning3.classList.remove("hidden");
          warning3.classList.add("flex");
          passwordLabel.classList.remove("text-[12px]");
          passwordLabel.classList.add("text-base");
          password.classList.remove("flex");
          password.classList.add("hidden");
        } else if (password.value.length <= 4) {
          warning3.classList.remove("hidden");
          warning3.classList.add("flex");
        }
      }
    });
  });

  showPassword.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (eyeImg.src.endsWith("/assets/eye.svg")) {
      eyeImg.src = "/assets/eye-off.svg";
      password.type = "password";
      console.log("success");
    } else {
      eyeImg.src = "/assets/eye.svg";
      password.type = "text";
    }
  });

  remember.addEventListener("click", () => {
    if (remember.classList.contains("bg-white")) {
      remember.classList.remove("bg-white");
      remember.classList.add("bg-black");
      remember.classList.remove("hover:bg-[#BCB7B5]");
      remember.classList.add(
        "border",
        "hover:border-white",
        "border-[#5A5A5A]"
      );
    } else {
      remember.classList.remove("bg-black");
      remember.classList.add("bg-white");
      remember.classList.add("hover:bg-[#BCB7B5]");
      remember.classList.remove("hover:border", "hover:border-white");
    }
  });

  lang.textContent = langChoose.options[0].textContent;
  langChoose.addEventListener("change", () => {
    lang.textContent = langChoose.options[langChoose.selectedIndex].textContent;
  });
});

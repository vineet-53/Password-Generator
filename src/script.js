const strenghtColorDisplay = document.querySelector(
  "span[data-password-strength]"
);
const inputSlider = document.querySelector("input[data-password-length]");
const lengthDisplay = document.querySelector("span[data-password-length-text]");
const generatePassword = document.querySelector(
  "button[data-password-generate]"
);
const checkBoxNodes = document.querySelectorAll("input[type=checkbox]");
const checkBoxes = Array.from(checkBoxNodes);
const strenghtText = document.querySelector(
  "span[data-password-strength-text]"
);
const passwordGenerated = document.getElementById("password-generated-text");
const copyPassword = document.getElementById("password-copy");
let passwordLength = 12;
let password = "";
let checkedBoxesList;
// update ui after any changes
function updateUi(checkedBoxesList = []) {
  lengthDisplay.textContent = passwordLength;
  if (checkedBoxesList.length > 2 && passwordLength > 10) {
    // update the color of strength to green
    strenghtColorDisplay.classList.add("strong");
    strenghtColorDisplay.classList.remove("weak");
    strenghtText.textContent = "Strong";
  } else {
    // update the color or strength red
    strenghtColorDisplay.classList.remove("strong");
    strenghtColorDisplay.classList.add("weak");
    strenghtText.textContent = "Weak";
  }
}
// setting password if length is changing
function setPasswordLength(event) {
  passwordLength = Math.floor(event.target.value / 4);
}
// checking the password strenght
function checkPasswordStrength() {
  checkedBoxesList = checkBoxes.filter((input) => {
    if (input.checked) return input;
  });
  updateUi(checkedBoxesList);
}
function fetchPasswordArr() {}
// handle generate
function handleGeneratePassword() {}
function copyPasswordToClipboard() {
  navigator.clipboard.writeText(passwordGenerated.innerHTML);
}
checkBoxes.forEach((checkBox) => {
  checkBox.addEventListener("click", () => {
    checkPasswordStrength();
  });
});
inputSlider.addEventListener("change", (event) => {
  setPasswordLength(event);
  updateUi();
  checkPasswordStrength();
});

generatePassword.addEventListener("click", (e) => {
  checkPasswordStrength();
  handleGeneratePassword();
});
copyPassword.addEventListener("click", () => {
  copyPasswordToClipboard();
});

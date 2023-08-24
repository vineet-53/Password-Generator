const passwordStrengthElem = document.querySelector(
  "span[data-password-strength]"
);
const passwordLengthElem = document.querySelector(
  "input[data-password-length]"
);
const passwordLengthText = document.querySelector(
  "span[data-password-length-text]"
);
const generatePassword = document.querySelector(
  "button[data-password-generate]"
);
const checkBoxNodeList = document.querySelectorAll("input[type=checkbox]");
const checkBoxList = Array.from(checkBoxNodeList);
const passwordStrengthTextElem = document.querySelector('span[data-password-strength-text]')
const passwordCopyElem = document.querySelector("span[data-password-copy]");
let passwordLength = 0;

// update ui after any changes
function updateUi(checkedBoxesList = []) {
  passwordLengthText.textContent = passwordLength;
  if (checkedBoxesList.length > 2 && passwordLength > 10) {
    // update the color of strength to green
    passwordStrengthElem.classList.add("strong");
    passwordStrengthElem.classList.remove("weak");
    passwordStrengthTextElem.textContent = "Strong"
  } else {
    // update the color or strength red
    passwordStrengthElem.classList.remove("strong");
    passwordStrengthElem.classList.add("weak");
    passwordStrengthTextElem.textContent = "Weak"
  }
}
// setting password if length is changing
function setPasswordLength(event) {
  passwordLength = Math.floor(event.target.value / 4);
}
// checking the password strenght
function checkPasswordStrength() {
  let checkedBoxesList = checkBoxList.filter((input) => {
    if (input.checked) return input;
  });
  updateUi(checkedBoxesList);
}
// handle generate

function handleGeneratePassword() {
  console.log("password is being generated");
}
checkBoxList.forEach((checkBox) => {
  checkBox.addEventListener("click", () => {
    checkPasswordStrength();
  });
});
passwordLengthElem.addEventListener("click", (event) => {
  setPasswordLength(event);
  updateUi();
  checkPasswordStrength();
});

generatePassword.addEventListener("click", (e) => {
  checkPasswordStrength();
  handleGeneratePassword();
});

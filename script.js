const strenghtColorDisplay = document.querySelector(
  "span[data-password-strength]"
);
const inputSlider = document.querySelector("input[data-password-length]");
const lengthDisplay = document.querySelector("span[data-password-length-text]");
const generatePassword = document.querySelector(
  "button[data-password-generate]"
);
const checkBoxes = Array.from(
  document.querySelectorAll("input[type=checkbox]")
);
const strenghtText = document.querySelector(
  "span[data-password-strength-text]"
);
const copiedDiv = document.querySelector("div[data-copied-text]");
const passwordDisplay = document.getElementById("generated-password");
const copyPassword = document.getElementById("copy-passwd");
let passwordLength = 12;
let password = "password";
let checkedBoxesList = [];
let symbols = ["!", "@", "#", "$", "%", "^", "&", "*"];
handleSlider();
// update the slider value and display
function updateUi() {
  lengthDisplay.innerHTML = passwordLength;
  passwordDisplay.value = password;
}
function handleSlider() {
  passwordLength = Math.floor(inputSlider.value / 2);
  updateUi();
}
function setColor(color, text = "") {
  strenghtColorDisplay.style.backgroundColor = color;
  // shadow
  strenghtText.innerHTML = text;
  strenghtColorDisplay.style.boxShadow = `0  0 30px 1px ${color}`;
}
async function copyPasswordToClipboard() {
  try {
    await navigator.clipboard.writeText(passwordDisplay.value);
    copiedDiv.innerHTML = "copied";
  } catch (e) {
    copiedDiv.innerHTML = "Error";
  }
  copiedDiv.style.opacity = 1;
  setTimeout(() => {
    copiedDiv.style.opacity = 0;
  }, 1000);
}
function checkInputBoxes() {
  return checkBoxes.filter((checkBox) => checkBox.checked == true);
}
function checkPasswordStrength() {
  checkedBoxesList = checkInputBoxes();
  if (passwordLength > 15 && checkedBoxesList.length >= 2) {
    setColor("#24f324", "strong");
  } else {
    setColor("red", "weak");
  }
}
// get random number
function getRandNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
// get number from 0 to 9
function getNumber() {
  return getRandNum(0, 9);
}
// uppercase
function getUpperCase() {
  return String.fromCharCode(getRandNum(65, 90));
}

//lowercase
function getLowerCase() {
  return String.fromCharCode(getRandNum(97, 122));
}
// special char
function getSymbol() {
  return symbols[getRandNum(0, symbols.length)];
}
function append(char) {
  password.concat(char);
}
function checkCheckBox(checkBox) {
  let id = checkBox.id;
  if (id == "numbers") password += getNumber();
  if (id == "lowercase") password += getLowerCase();
  if (id == "uppercase") password += getUpperCase();
  if (id == "symbols") password += getSymbol();
}
function handleGeneratePassword() {
  password = "";
  checkedBoxesList.forEach((checkBox) => {
    let randomIndex = getRandNum(0  ,checkedBoxesList.length);
    checkCheckBox(checkedBoxesList[randomIndex]);
  });
  // remaining length
  for (let i = 0; i < passwordLength - checkedBoxesList.length; i++) {
    let selectedInput =
      checkedBoxesList[getRandNum(0, checkedBoxesList.length)];
    checkCheckBox(selectedInput);
  }
  updateUi();
}
function checkInputParameters() {
  if (passwordLength < checkedBoxesList.length && checkedBoxesList.length > 0) {
    passwordLength = checkedBoxesList.length;
    updateUi();
  }
}
generatePassword.addEventListener("click", (event) => {
  if (checkedBoxesList.length != 0) {
    checkInputParameters();
    handleGeneratePassword();
  }
});
checkBoxes.forEach((checkBox) => {
  checkBox.addEventListener("click", () => {
    checkPasswordStrength();
  });
});
inputSlider.addEventListener("input", () => {
  handleSlider();
  checkPasswordStrength();
});
copyPassword.addEventListener("click", () => {
  copyPasswordToClipboard();
});

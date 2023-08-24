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
const checkBoxNodes = document.querySelectorAll("input[type=checkbox]");
const checkBoxes = Array.from(checkBoxNodes);
const passwordStrengthTextElem = document.querySelector(
  "span[data-password-strength-text]"
);
const passwordGeneratedText = document.getElementById(
  "password-generated-text"
);
const passwordCopyElem = document.getElementById("password-copy");
let passwordLength = 12;
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let alphabets_lg = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

let alphabets_sm = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let characters = ["!", "@", "#", "$", "%", "^", "&", "*"];
let checkedBoxesList;
// update ui after any changes
function updateUi(checkedBoxesList = []) {
  passwordLengthText.textContent = passwordLength;
  if (checkedBoxesList.length > 2 && passwordLength > 10) {
    // update the color of strength to green
    passwordStrengthElem.classList.add("strong");
    passwordStrengthElem.classList.remove("weak");
    passwordStrengthTextElem.textContent = "Strong";
  } else {
    // update the color or strength red
    passwordStrengthElem.classList.remove("strong");
    passwordStrengthElem.classList.add("weak");
    passwordStrengthTextElem.textContent = "Weak";
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
  console.log("copy text");
  let passwordText = passwordGeneratedText.innerHTML;
  navigator.clipboard.writeText(passwordText);
}
checkBoxes.forEach((checkBox) => {
  checkBox.addEventListener("click", () => {
    checkPasswordStrength();
  });
});
passwordLengthElem.addEventListener("change", (event) => {
  setPasswordLength(event);
  updateUi();
  checkPasswordStrength();
});

generatePassword.addEventListener("click", (e) => {
  checkPasswordStrength();
  handleGeneratePassword();
});
passwordCopyElem.addEventListener("click", () => {
  copyPasswordToClipboard();
});

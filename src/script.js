const passwordStrenghtElem = document.querySelector(
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
const passwordCopyElem = document.querySelector("span[data-password-copy]");
let passwordLength = 0;

// update ui after any changes 
function updateUi() {
  passwordLengthText.textContent = passwordLength;
}
// setting password if length is changing
function setPasswordLength() {
  passwordLength = Math.floor(event.target.value / 4);
}

// handle generate
function handleGeneratePassword() {
  console.log("password is being generated");
}
passwordLengthElem.addEventListener("change", (event) => {
  setPasswordLength();
  updateUi();
});


generatePassword.addEventListener("click", (e) => {
  handleGeneratePassword();
});

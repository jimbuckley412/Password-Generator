// Assignment Code
var generateBtn = document.querySelector("#generate");
  const specialCharacters = "?!@#$%";
  const upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCases ="abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const generateButton = document.getElementById("generateBtn");
  generateBtn.addEventListener("click", writePassword)

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var completedPassword = "";

  passwordText.value = password;
}

function generatePassword() {
  var minimumCount = 0;

  var minimumNumbers ="";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSpecialCharacters = "";

  var functionArray = [
  function getNumbers() {
    return String.fromCharCode(math.floor(Math.random() * 10 + 48));
  },
  function getLowerCases() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
  },
  function getUpperCases() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
  },
  function getSpecialCharacters() {
    return specialCharacters(Math.floor(Math.random() * specialCharacters.length));
  }];
};


if (numbers === true) {
  minimumNumbers = functionArray.getNumbers();
  minimumCount++;
}

if (lowerCases === true) {
  minimumLowerCases = functionArray.getLowerCases(); 
    minimumCount++;
}
if (upperCases === true) {
  minimumUpperCases = functionArray.getUpperCases(); 
    minimumCount++;
}

if (specialCharacters === true) {
  minimumSpecialCharacters = functionArray.getSpecialCharacters();
  minimumCount++
}

var randomPasswordGenerated = "";
for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
  var randomNumberPicked = Math.floor(Math.random() * 4);

  randomPasswordGenerated += randomNumberPicked;
  generatePassword();
}

randomPasswordGenerated += minimumNumbers;
randomPasswordGenerated += minimumLowerCases;
randomPasswordGenerated += minimumUpperCases;
randomPasswordGenerated += minimumSpecialCharacters;

return randomPasswordGenerated;
generateBtn.addEventListener("click", generatePassword)

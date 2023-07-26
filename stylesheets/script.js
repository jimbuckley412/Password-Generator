// Assignment Code
var generateBtn = document.querySelector("#generate");
  const generateButton = document.getElementById("generateBtn");
  generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  var uppercase = confirm("Your password should have an uppercase letter! Click OK to continue");
  var lowercase = confirm("Your password should have a lowercase letter! Click OK to continue");
  var symbols = confirm("Your password should have a symbol! Click OK to continue");
  var numbers = confirm("Your password should have a number! Click OK to continue");
  var keyLength = prompt("Password must be between 8 and 128 characters! Click OK to continue");
  var completedPassword = "";

  var specialCharacters = "?!@#$%";
  var upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCases ="abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";

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

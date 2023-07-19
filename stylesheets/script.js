// Assignment Code
var generateBtn = document.querySelector("#generate");
  const specialCharacters = "?!@#$%";
  const upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCases ="abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passwordLength = prompt ("Please enter the number of characters you want for your password");
  var numbers = confirm("Do you want numbersin your password?");
  var lowerCases = confirm("Do you want lowercases in your password?");
  var uppercases = confirm("Do you want uppercases in your password?");
  var specialCharacters = confirm("Do you want special characters in your password?");
  var minimumCount = 9;
  var minimumNumbers ="1";
  var minimumLowerCases = "6";
  var minimumUpperCases = "1";
  var minimumSpecialCharacters = "1";

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
  }
];

if (numbers === true) {
  minimumCount++;
}

if (lowerCases === true) {
  minimumLowerCases = functionArray[]; 
    minimumCount++;
}

if (specialCharacters === true) {
  minimumSpecialCharacters = functionArray [3];
  minimumCount++
}

var randomPasswordGenerated = "";
for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
  var randomNumberPicked = Math.floor(Math.random() * 4);
  randomPasswordGenerated += functionArray[randomNumberPicked]();
}

randomPasswordGenerated += minimumNumbers;
randomPasswordGenerated += minimumLowerCases;
randomPasswordGenerated += minimumUpperCases;
randomPasswordGenerated += minimumSpecialCharacters;

return randomPasswordGenerated;
Event.preventDefault();
}
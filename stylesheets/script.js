// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var specialCharacters = '?!@#$%'.split('');
  var upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  var lowerCases ="abcdefghijklmnopqrstuvwxyz".split('');
  var pwNumbers = "0123456789".split('');
  var passwordLength = 12;
  var lettersMix = [...specialCharacters, ...upperCases, ...lowerCases, ...pwNumbers];
  var characterLength = lettersMix.length;
for(var i = 0; ((i<= passwordLength; i++) {
  var randomNUmber = Math.floor(Math.random() * lettersMix.length);
  password += lettersMix.substring(randomNumber, RandomNumber +1);
}
 document.querySelector("#generate").value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

generateBtn.addEventListener("onclick", writePassword) {
  var passwordLength = prompt("Please enter the number of characters you want for you new password. It must be more than 12 but less than 128.");
  var pwNumbers = confirm("Do you want numbers in your Password?");
  var lowerCases = confirm("Do you want Lower Cases in you Password?");
  var upperCases = confirm("Do you want Capital Letters in your password?");
  var specialCharacters = confirm("Do you want Special Characters in your password?"));
  }

// moved the function writePassword
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password")
  //  added variables for the password 
  var specialCharacters = "?!@#$%".split("");
  var upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var lowerCases ="abcdefghijklmnopqrstuvwxyz".split("");
  var pwNumbers = "0123456789".split("");
  //  created a variable lettersMix that is a combination of all variables mixed.
  var lettersMix = [...specialCharacters, ...upperCases, ...lowerCases, ...pwNumbers];
  var characterLength = lettersMix.length;
  var generateButton = document.querySelector("generateBtn");
  passwordText.value = password;
}
//prompts to generate Pasword function

function generatePassword() {
  // minimum count for all variables so each type needed
  var minimumCount = 0;
  // all lower, upper, numbers, and special characters will be used but no minimums neccessary
  var minimumPwNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSpecialCharacters = ""; 
// forms the math randomizer
  var functionArray = {
    getPwNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },
    getLowerCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },
    getUpperCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },
    getSpecialCharacters: function() {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    }
  };
  // proofs if true generate 
    if (pwNumbers === true) {
      minimumPwNumbers = functionArray.getPwNumbers();
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
      minimumCount++;
    }
    // empty string value for the password
    var randomPasswordGenerated = "";
    //for loop for randomization
    for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
      var randomNumberPicked = Math.floor(Math.random() * 4);
      randomPasswordGenerated += randomNumberPicked;
    }
// clarifies that numbers lower, upper and special characters will be in your password.
    randomPasswordGenerated += minimumPwNumbers;
    randomPasswordGenerated += minimumLowerCases;
    randomPasswordGenerated += minimumUpperCases;
    randomPasswordGenerated += minimumSpecialCharacters;

    return randomPasswordGenerated;
}

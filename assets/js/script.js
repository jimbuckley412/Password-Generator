// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// created the generatePassword function
// I created a prompt that asks the user how long they want their password
// the if statement checks that the password length is greater than 12 and less than 128
// if not it will alert the user with alert message "password must be between 12 and 128 characters Thank You!"
// return exits the function
function generatePassword() {
    var passwordLength = prompt("How long do you want your password to be? However it must be between 12 characters and 128 characters.");
    
    if (passwordLength < 12 || passwordLength > 128) {
        alert ("password must be between 12 and 128 characters Thank You!");
        return;
    }

    // I created different prompts confimation prompts
    // I created 1 for each lowercase letters, uppercase letters, numbers, and special characters
    // prompts the user to select different character types
    // the confirms are boolean values true or false yes or no on the form
    var includeLowercaseLetters = confirm("Do you want to include lowercase letters in your password?");
    var includeUppercaseLetters = confirm("Do you want to include uppercase letters in your password?");
    var includeNumbers = confirm("Do you want to include numbers in your password?");
    var includeSpecialCharacters = confirm("Do you want to include special characters in your password?");

    // checks if the user has selected at least 1 of the different character specifications
    // if not it will alert the user to select at least 1 type for a more secure password
    if(!includeLowercaseLetters && !includeUppercaseLetters && !includeNumbers && !includeSpecialCharacters) {
        alert("You must select at least one character type! Please select one for a more secure password Thank you!");
        return;
    }

    // create the arrays needed for the different character types
    // I created 1 for lowercase letters, uppercase, numbers, and special characters
    // .split("") just splits the string into an array of substrings
    var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");
    var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    var numbers = "0123456789".split("");
    var specialCharacters = "!@#$%^&*()_+~`|}{[]\:;?><,./-=".split("");

    // create an empty array to store the different character types for password
    var password = [];

    // for loop that loops through the different selected characters and randomizes character and location
    for (var i = 0; i < passwordLength; i++) {
        password.push(selectedCharacters(Math.floor(Math.random() * selectedCharacters.length)));
    }

    // return the password as a string
    return password.join("");
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz" + "0123456789" + "!?@$%#"

  for (let i = 1; i <= 10; i++) {
    var char = Math.floor(math.random()
                          * str.length +1);
    
      pass += str.charAt(char)
  }

  return pass;
}
function gfg_Run() {
  el_down.innerHTML = generateP();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

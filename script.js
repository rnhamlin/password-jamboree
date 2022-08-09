// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log(generateBtn)
// Write password to the #password input
function writePassword() {
  console.log("click")
  var password = generatePassword(); 
  console.log(password)
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword() {
  var possiblechars=""
  var lowerchars="abc"
  var upperchars="ABC"
var passlength=prompt("How long would you like your password to be?")
console.log(passlength)
var lowercase=confirm("Do you want lowercase characters?")
console.log(lowercase)
if(lowercase) {
  console.log("I need to enter lowercase letters")
  possiblechars=possiblechars + lowerchars
}
var uppercase=confirm("Do you want uppercase letters?")
console.log(uppercase)
if(uppercase) {
  console.log("I need to enter uppercase letters")
  possiblechars=possiblechars + upperchars

}
}
  return "iamapassword"
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

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
  var lowerchars="abcdefghijklmnopqrstuvwxyz"
  var upperchars="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var number="1234567890"
  var spchar="!@#$%^&*()"
  var password=""
  // What if they do less than 8 and greater than 128? What if they enter a word?
var passlength=prompt("How long would you like your password to be?")
console.log(passlength)
var lowercase=confirm("Do you want lowercase characters?")
console.log(possiblechars)
if(lowercase) {
  possiblechars=possiblechars + lowerchars
}
var uppercase=confirm("Do you want uppercase letters?")
if(uppercase) {
  possiblechars=possiblechars + upperchars
}
var num=confirm("Do you want numbers?")
if(num) {
  possiblechars=possiblechars + number
}
var spec=confirm("Do you want special characters?")
if(spec) {
  possiblechars=possiblechars + spchar
}
// What if they answer "no" to everything?
console.log(possiblechars)
console.log(possiblechars[2])
for(i=0; i < passlength; i++) {
  var randomIndex=Math.floor(Math.random()*possiblechars.length)
  console.log(i)
  console.log(randomIndex)
  console.log(possiblechars[randomIndex])
  password+=possiblechars[randomIndex]
  console.log(password)

}
return password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Fill arrays with available characters - lowercase, uppercase, special characters, numbers
var lowerCaseArray = [
  'a', 
  'b', 
  'c', 
  'd', 
  'e', 
  'f', 
  'g', 
  'h', 
  'i', 
  'j', 
  'k', 
  'l', 
  'm', 
  'n', 
  'o', 
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

var upperCaseArray = [
  'A', 
  'B', 
  'C', 
  'D', 
  'E', 
  'F', 
  'G', 
  'H', 
  'I', 
  'J', 
  'K', 
  'L', 
  'M', 
  'N', 
  'O', 
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'X',
  'X',
  'Y',
  'Z'
];

var specialCharArray = [
  '!',
  '"',
  '#',
  '$',
  '%',
  '&',
  "'",
  '(',
  ')',
  '*',
  '+',
  ',',
  '-',
  '.',
  '/',
  ':',
  ';',
  '<',
  '=',
  '>',
  '?',
  '@',
  '[',
  ']',
  '^',
  '_',
  '`',
  '{',
  '|',
  '}',
  '~'
];

var numberCharArray = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
];

// Establish variables to pull a random element from each array
// var randomLowerCase = lowerCaseArray[Math.floor(Math.random() * lowerCaseArray.length)];
// var randomUpperCase = upperCaseArray[Math.floor(Math.random() * upperCaseArray.length)];
// var randomSpecialChar = specialCharArray[Math.floor(Math.random() * specialCharArray.length)];
// var randomNumberChar = numberCharArray[Math.floor(Math.random() * numberCharArray.length)];

var passwordLength = 12;
var passwordArray = [];

function passwordGen() {
  for (i=0; i < passwordLength; i++) {
    var randomLowerCase = lowerCaseArray[Math.floor(Math.random() * lowerCaseArray.length)];
    console.log(randomLowerCase);
    passwordArray.push(randomLowerCase);
  };
};

passwordGen();
var passwordString = passwordArray.join('');
console.log(passwordString);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

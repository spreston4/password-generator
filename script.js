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

// Establish variables to pull a random element from each array - scope needs to be in function so variable refreshes every loop
// var randomLowerCase = lowerCaseArray[Math.floor(Math.random() * lowerCaseArray.length)];
// var randomUpperCase = upperCaseArray[Math.floor(Math.random() * upperCaseArray.length)];
// var randomSpecialChar = specialCharArray[Math.floor(Math.random() * specialCharArray.length)];
// var randomNumberChar = numberCharArray[Math.floor(Math.random() * numberCharArray.length)];
// passwordArray.push(arrayName)

var passwordLength = 8;         // Set length of password to generate
var passwordArray = [];         // Empty array to stor password
var wantUpperCase = true;       // Does user want uppercase characters in password?
var wantLowerCase = false;      // Does user want lowercase characters in password?
var wantSpecialChar = true;     // Does user want special characters in password?
var wantNumberChar = true;      // Does user want number characters in password?

function passwordGen() {
  for (i=0; i < passwordLength; i = i + 1) {

    if (i < passwordLength && wantUpperCase === true) {
      var randomUpperCase = upperCaseArray[Math.floor(Math.random() * upperCaseArray.length)];
      passwordArray.push(randomUpperCase);
      i = i + 1;
    };

    if (i < passwordLength && wantLowerCase === true) {
      var randomLowerCase = lowerCaseArray[Math.floor(Math.random() * lowerCaseArray.length)];
      passwordArray.push(randomLowerCase);
      i = i + 1;
    };

    if (i < passwordLength && wantSpecialChar === true) {
      var randomSpecialChar = specialCharArray[Math.floor(Math.random() * specialCharArray.length)];
      passwordArray.push(randomSpecialChar);
      i = i + 1;
    };

    if (i < passwordLength && wantNumberChar === true) {
      var randomNumberChar = numberCharArray[Math.floor(Math.random() * numberCharArray.length)];
      passwordArray.push(randomNumberChar);
    };
  };
};

passwordGen();
var passwordString = passwordArray.join('');
console.log("Your new password is: " + passwordString);
console.log(passwordString.length);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

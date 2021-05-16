// Assignment Code
var generateBtn = document.querySelector("#generate");

// Define global arrays
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

// Generate the password
function generatePassword() {
  // Declare empty 'passwordArray'for password storage & 'allCharArray' for combining character arrays
  var passwordArray = [];
  var allCharArray = [];

  // Ask user for 'passwordLength'
  var passwordLengthString = prompt('How long do you want your password?', '15');
  var passwordLength = parseInt(passwordLengthString);

  // Validate that 'passwordLength' is between 8 and 128 characters
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a value between 8 and 128.")
    generatePassword();
  };
  console.log('Password length: ' + passwordLength); // Display for testing

  // Ask user if they want uppercase
  var wantUpperCase = confirm('Do you want uppercase characters in your password?');
  console.log('Uppercase: ' + wantUpperCase); // Display for testing

  // Ask user if they want lowercase
  var wantLowerCase = confirm('Do you want lowercase characters in your password?');
  console.log('Lowercase: ' + wantLowerCase); // Display for testing

  // Ask user if they want special characters
  var wantSpecialChar = confirm('Do you want special characters in your password?');
  console.log('Special char: ' + wantSpecialChar); // Display for testing

  // Ask user if they want numbers
  var wantNumberChar = confirm('Do you want numbers in your password?');
  console.log('Numbers: ' + wantNumberChar); // Display for testing

  // Validate that at least one type of data is selected 
  if (!wantUpperCase && !wantLowerCase && !wantSpecialChar && !wantNumberChar) {
    alert('In order to generate your password you must select at least one character type.');
    generatePassword();
  };

  // Establish variable 'i' to ensure correct 'passwordLength
  var i = 0;

  // Combine selected character types into one 'allCharArray' - add one of each selected character type to the 'passwordArray'
  // Combine 'upperCaseArray'
  if (wantUpperCase) {
    // Select random element from 'upperCaseArray'
    var randomUpperCase = upperCaseArray[Math.floor(Math.random() * upperCaseArray.length)];
    // Place selected element into 'passwordArray'
    passwordArray.push(randomUpperCase);
    // Keep track of length of password
    i = i + 1; 
    // Add current array to 'allCharArray'
    allCharArray = allCharArray.concat(upperCaseArray);
    console.log(upperCaseArray.length, 'Uppercase: ' + upperCaseArray); // For testing
  };

  // Combine 'lowerCaseArray'
  if (wantLowerCase) {
    var randomLowerCase = lowerCaseArray[Math.floor(Math.random() * lowerCaseArray.length)];
    passwordArray.push(randomLowerCase);
    i = i + 1;
    allCharArray = allCharArray.concat(lowerCaseArray);
    console.log(lowerCaseArray.length, 'Lowercase: ' + lowerCaseArray); // For testing
  };

  // Combine 'specialCharArray'
  if (wantSpecialChar) {
    var randomSpecialChar = specialCharArray[Math.floor(Math.random() * specialCharArray.length)];
    passwordArray.push(randomSpecialChar);
    i = i + 1;
    allCharArray = allCharArray.concat(specialCharArray);
    console.log(specialCharArray.length, 'Special char: ' + specialCharArray); // For testing
  };

  // Combine 'numberCharArray'
  if (wantNumberChar) {
    var randomNumberChar = numberCharArray[Math.floor(Math.random() * numberCharArray.length)];
    passwordArray.push(randomNumberChar);
    i = i + 1;
    allCharArray = allCharArray.concat(numberCharArray);
    console.log(numberCharArray.length, 'Numbers : ' +numberCharArray); // For testing
  };
  
  console.log(allCharArray.length, 'All Char Array: ' + allCharArray); // For testing

  // Fill the rest of 'passwordArray' with random elements from 'allCharArray'
  for (i = i; i < passwordLength; i++) {
    var randomChar = allCharArray[Math.floor(Math.random() * allCharArray.length)];
    passwordArray.push(randomChar);
  };

// ------------------------------------------------------------------------------------------------- //
// Original Logic - error with the way it counted i - excluding numbers would throw off count
  // for (i=0; i < passwordLength; i = i + 1) {

  //   if (i < passwordLength && wantUpperCase === true) {
  //     var randomUpperCase = upperCaseArray[Math.floor(Math.random() * upperCaseArray.length)];
  //     passwordArray.push(randomUpperCase);
  //     i = i + 1;
  //   };

  //   if (i < passwordLength && wantLowerCase === true) {
  //     var randomLowerCase = lowerCaseArray[Math.floor(Math.random() * lowerCaseArray.length)];
  //     passwordArray.push(randomLowerCase);
  //     i = i + 1;
  //   };

  //   if (i < passwordLength && wantSpecialChar === true) {
  //     var randomSpecialChar = specialCharArray[Math.floor(Math.random() * specialCharArray.length)];
  //     passwordArray.push(randomSpecialChar);
  //     i = i + 1;
  //   };

  //   if (i < passwordLength && wantNumberChar === true) {
  //     var randomNumberChar = numberCharArray[Math.floor(Math.random() * numberCharArray.length)];
  //     passwordArray.push(randomNumberChar);
  //   };
  //   // console.log(passwordArray);   // Display for testing
  // };
  // ----------------------------------------------------------------------------------------------- //

  // Convert 'passwordArray' to string
  var password = passwordArray.join('');
  console.log('Password: ' + password);                            // Display for testing
  console.log('Actual password length: ' + passwordArray.length);  // Display for testing

  // Return the password
  return password;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

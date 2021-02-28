// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  //prompt for length 8 to 128 chars
  var passwordLength = prompt("Enter password length (8 to 128 characters)");
  if (checkLength(passwordLength) == false) {
    while (checkLength(passwordLength) == false) {
      // this is a loop that keeps prompting length and running the check until the input is valid
      var badInput = alert("That is not a valid response.");
      passwordLength = prompt("Enter password length (8 to 128 characters)");
    }
  }

  var responseArray = askQuestions();
  {
  }
  // askQuestions(); this should populate responses
  // if responsesArray is empty... show a message and repeat (18-22)

  if (responseArray.length === 0) {
    while (responseArray.length === 0) {
      alert("You must pick at least one character type");
      responseArray = askQuestions();
    }
  }
  // else if the array is not empty... move on - to random number generation
}
function askQuestions() {
  const responses = [];

  const upperQ = confirm("Do you want uppercase letters?");
  const lowerQ = confirm("Do you want lowercase letters?");
  const numberQ = confirm("Do you want numbers?");
  const symbolQ = confirm("Do you want symbols?");

  console.log(responses.includes("upperQ"));

  //instead of pushing to an array do individual function calling

  if (upperQ === true) {
    responses.push("upperQ");
    console.log("include uppercase letters");
  } else {
    console.log("* no uppercase");
  }
  if (lowerQ === true) {
    // push into array
    responses.push("lowerQ");
  } else {
    console.log("* no lowercase");
  }
  if (numberQ === true) {
    // push into array
    responses.push("numberQ");
  } else {
    console.log("* no numbers");
  }
  if (symbolQ === true) {
    // push into array
    responses.push("symbolQ");
  } else {
    console.log("* no symbols");
  }
  console.log(responses);
  return responses;
}

//----------------------------------------------------------------//
// take the approved categories and generate randoms of each ategory

// for loop through the chosen character types for the length of passwordLength

//if (responses[0] === true) {
//console.log("this is where the generate function would be called");
//}

//if (responses[1] === true) {
//}

//---------------------------------------------------------------//

function checkLength(passwordLength) {
  // if the length is a number && >=8 && <= 128 return true
  if (!isNaN(passwordLength) && passwordLength >= 8 && passwordLength <= 128) {
    console.log("this IS valid");
    return true;
  } else {
    console.log("this is not valid input");
    return false;
  }
}
//------------------------------------------------------------------//

//---------------------------------------------------------------//
//****************************************************** */
//putting all of the getRandom functions into an object called randomFunc
// var randomFunc = {
//   upper: getRandomUpper,
//   lower: getRandomUpper,
//   number: getRandomNumber,
//   symbol: getRandomSymbol,
// };

//******************************************************* */

//---------------------------------------------------------------//

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

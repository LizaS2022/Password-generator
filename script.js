// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function generatePassword() {

  let numbers = "1234567890";
  let uppercaseLetters= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  let specialCharacters = "!@#$%^&*(){}[]=<>/.";
  
  let pass ="";

  let passwordLength = prompt("Password length? ");
  let passLen = Number(passwordLength);


  if ((passLen < 8) || (passLen > 123)){
    alert("Password length must be between 8 and 123 characters");
    // passwordLength = prompt("Password length? ");
    return "try again";
  }


  let wantNum = confirm("Would you like your password to contain numbers?");
  let wantUppercase = confirm("Would you like your password to contain uppercase letters? ");
  let wantLowercase = confirm("Would you like your password to contain lowercase letters? ");
  let wantSpecialChar = confirm("Would you like your password to contain special character letters?");

   let possibleCharacters = "";

  if (wantNum == true) {
    possibleCharacters += numbers;
}


if (wantUppercase == true) {
  possibleCharacters += uppercaseLetters;
}



if (wantLowercase == true) {
  possibleCharacters += lowercaseLetters;
  
}



if (wantSpecialChar == true) {
  possibleCharacters += specialCharacters;
 
}

    for (let i = 0; i < passLen; i++) {
      pass += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
  
    }
  
    return pass;
    
};

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-01

      Project to validate a form used for setting up a new account
      Author: 
      Date:   

      Filename: project06-01.js
*/

const submitButton = document.getElementById("submitButton");
const pwd = document.getElementById("pwd");
const pwd2 = document.getElementById("pwd2");

// Add event listener for click event on submitButton
submitButton.addEventListener("click", function() {

  // Check if password meets pattern match
  if (!pwd.value.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
    pwd.setCustomValidity("Your password must be at least 8 characters with at least one letter and one number");
  }
  // Check if passwords match
  else if (pwd.value !== pwd2.value) {
    pwd2.setCustomValidity("Your passwords must match");
  }
  // Clear validation message if both conditions are met
  else {
    pwd.setCustomValidity(""); // empty text string to clear validation message
  }
});


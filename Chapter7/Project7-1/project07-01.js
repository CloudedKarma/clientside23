'use strict';

/*
  JavaScript 7th Edition
  Chapter 7
  Project 07-01
  Author: Jackson Lawrence
  Date: 03/30/23
  Filename: project07-01.js
*/

// Wait for the window to load before setting up the form validation
window.addEventListener('load', function () {
  // Get the form element
  const signupForm = document.getElementById('signup');
  
  // Add event listener to the form
  signupForm.addEventListener('submit', function (e) {
    // Prevent the form from submitting normally
    e.preventDefault();

    // Get the password value from the form input
    const password = document.getElementById('pwd').value;

    // Define regex patterns for password validation
    const uppercaseRegex = /[A-Z]/;
    const digitRegex = /\d/;
    const symbolRegex = /[!$#%]/;

    // Get the feedback element to display password validation messages
    const feedback = document.getElementById('feedback');

    // Check if password meets the required criteria and display feedback
    if (password.length < 8) {
      feedback.textContent = 'Your password must be at least 8 characters.';
    } else if (!uppercaseRegex.test(password)) {
      feedback.textContent = 'Your password must include an uppercase letter.';
    } else if (!digitRegex.test(password)) {
      feedback.textContent = 'Your password must include a number.';
    } else if (!symbolRegex.test(password)) {
      feedback.textContent = 'Your password must include one of the following: !$#%.';
    } else {
      // If password is valid, submit the form
      signupForm.submit();
    }
  });
});

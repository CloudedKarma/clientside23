"use strict"

/*    JavaScript 7th Edition
      Chapter 4
      Project 04-03

      Application to count the number of characters in a review comment
      Author: 
      Date:   

      Filename: project04-03.js
*/

// Maximum Length of Review
const MAX_REVIEW = 1000;
document.getElementById("limit").innerHTML = MAX_REVIEW;

// Reference to elemets in the web page
let wordCountBox = document.getElementById("countValue");
let warningBox = document.getElementById("warningBox");


// Event listener for typing into the comment box
document.getElementById("comment").addEventListener("keyup", updateCount);

// Function to update the count with each keyup event
function updateCount() 
{
   // Set the warning box to an empty text string 
   warningBox.innerHTML = " ";
   
   // Count the number of characters in the comment box
   let commentText = document.getElementById("comment").value;
   let charCount = countCharacters(commentText);

   // Within the try statement, test if the charCount variable is greater than the value of the MAX_REVIEW constant. 
   // If it is, throw an exception with the error message “You have exceeded the character count limit”.
   try
   {
      if (charCount > MAX_REVIEW) throw "You have exceeded the character count limit";
   }
   // For caught exceptions, display the error message within the innerHTML of the warningBox object.
   catch (error)
   {
      warningBox.innerHTML = error;
   }
   finally
   {
      wordCountBox.innerHTML = charCount;
   }
}

/*=================================================================*/
// Function to count the number of characters in a text string
function countCharacters(textStr) 
{
   var commentregx = /\s/g;
   var chars = textStr.replace(commentregx, "");
   return chars.length;
} 
/* JavaScript 7th Edition
   Chapter 3
   Project 03-04

   Application to calculate total order cost
   Author: 
   Date:   

   Filename: project03-01.js
*/

let reviewers = ["WillHa85", "GoldFry26", "Mittens41", "Tompkins8", "CludedKarma"];
let reviewType = ["P", "N", "", "", "P"];
let stars = [5, 2, 1, 4, 5];
let reviewDates = ["11/18/2024", "11/17/2024", "11/15/2024", "11/10/2024", "11/11/2024"];
let reviews = [  "I've owned all of the Dance Off games from the beginning. I have lost 6 pounds since I started playing.",  "A so-so release of this well-established game. Where this release fails is in the choreography. Many of the moves follow predictable patterns. I hope the next release improves the choreography .",  "The installation was buggy and kept crashing my gaming console. I spent several hours on tech support with no solution to my problem. I finally returned it and got my money back. I wish I could give it a zero star rating.",  "The latest version of Dance Off improves upon the 8th Edition only slightly; still is one of the best dance-style games on the market.",   "This is one of the wiredest dances i have ever seen."];
let reviewTitles = ["My Favorite Workout Game", "Poor Choreography", "Buggy with Poor Tech Support", "Nice Improvement"];

// Define a function to compare stars for sorting
function compareStars(a, b) {
  return b - a;
}

// Define the starImages function
function starImages(rating) {
  let imageText = '';
  for (let i = 1; i <= rating; i++) {
    imageText += "<img src='star.png' alt=''>";
  }
  return imageText;
}

// Generate the HTML code for the customer reviews table
let reviewOrder = Array.from(Array(reviewers.length).keys());
reviewOrder.sort((a, b) => compareStars(stars[a], stars[b]));
for (let i of reviewOrder) {
  let reviewCode = '';
  if (reviewType[i] === 'P') {
    reviewCode += "<table class='prime'>";
  } else if (reviewType[i] === 'N') {
    reviewCode += "<table class='new'>";
  } else {
    reviewCode += "<table>";
  }
  reviewCode += "<caption>" + reviewTitles[i] + "</caption>";
  reviewCode += "<tr><th>By</th><td>" + reviewers[i] + "</td></tr>";
  reviewCode += "<tr><th>Rating</th><td>" + starImages(stars[i]) + "</td></tr>";
  reviewCode += "<tr><th>Review Date</th><td>" + reviewDates[i] + "</td></tr>";
  reviewCode += "<tr><td colspan='2'>" + reviews[i] + "</td></tr>";
  reviewCode += "</table>";
  document.getElementsByTagName('article')[0].insertAdjacentHTML('beforeend', reviewCode);
}

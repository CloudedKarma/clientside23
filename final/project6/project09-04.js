"use strict";

/* Page Objects */
let bestText = document.getElementById("best");
let clockTimer = document.getElementById("timer");

// Custom event that runs when the puzzle is solved
window.addEventListener("puzzleSolved", updateRecord);

window.addEventListener("load", function() {
  if (localStorage.getItem("puzzle8Best")) {
    bestText.textContent = getBestTime() + " seconds";
  }
});

function getBestTime() {
  if (localStorage.getItem("puzzle8Best")) {
    return parseInt(localStorage.getItem("puzzle8Best"));
  } else {
    return 9999;
  }
}

function updateRecord() {
  let solutionTime = parseInt(document.getElementById("timer").value);
  let bestTime = getBestTime();
  if (solutionTime < bestTime) {
    bestTime = solutionTime;
    bestText.textContent = bestTime + " seconds";
    localStorage.setItem("puzzle8Best", bestTime);
  }
}
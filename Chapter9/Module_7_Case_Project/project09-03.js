"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-03

      Project to retrieve date of last visit from web storage and mark new article
      Author: 
      Date:   

      Filename: project09-03.js
*/

if (localStorage.sbloggerVisit) 
{
  let storedLastDate = localStorage.getItem("sbloggerVisit");
  document.getElementById("lastVisitDate").textContent = storedLastDate;

  let lastDate = new Date(storedLastDate);

  let articleDates = document.getElementsByClassName("posttime");
  for (let date of articleDates) 
  {
    let articleDate = new Date(date.textContent);
    if (articleDate > lastDate) 
    {
      date.innerHTML += "<strong>new</strong>";
    }
  }
} 
else 
{
  document.getElementById("lastVisitDate").textContent = "Welcome to SBlogger!";
  let articleDates = document.getElementsByClassName("posttime");
  for (let date of articleDates) {
    date.innerHTML += "<strong>new</strong>";
  }
}

let currentDate = new Date("9/12/2024");
localStorage.setItem("sbloggerVisit", currentDate.toLocaleDateString());

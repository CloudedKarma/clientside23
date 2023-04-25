"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-04

      Project to turn a selection list into a selection of hypertext links
      Author: 
      Date:   

      Filename: project06-04.js
*/

function showAll(selectList) {
   const options = selectList.options;
   const optionLength = options.length;
 
   for (let i = 0; i < optionLength; i++) {
     options[i].style.display = "block";
   }
 }
 
 function filterSelect(selectList, category) {
   const options = selectList.options;
   const optionLength = options.length;
 
   for (let i = 0; i < optionLength; i++) {
     if (options[i].className === category) {
       options[i].style.display = "block";
     } else {
       options[i].style.display = "none";
     }
   }
 }
 
 const makeSelect = document.getElementById("make");
 const modelSelect = document.getElementById("model");
 const trimSelect = document.getElementById("trim");
 const yearSelect = document.getElementById("year");
 
 
 makeSelect.onchange = function() {
   const make = this.options[this.selectedIndex].value;
   if (make === "any") {
     showAll(modelSelect);
     showAll(trimSelect);
     showAll(yearSelect);
   } else {
     filterSelect(modelSelect, make);
     showAll(trimSelect);
     showAll(yearSelect);
   }
 }
 
 modelSelect.onchange = function() {
   const model = this.options[this.selectedIndex].value;
   if (model === "any") {
     showAll(trimSelect);
     showAll(yearSelect);
   } else {
     filterSelect(trimSelect, model);
     showAll(yearSelect);
   }
 }
 
 const selectVehicleBtn = document.getElementById("selectVehicle");
 selectVehicleBtn.onclick = function() {
   const make = document.getElementById("make").options[document.getElementById("make").selectedIndex].text;
   const model = document.getElementById("model").options[document.getElementById("model").selectedIndex].text;
   const trim = document.getElementById("trim").options[document.getElementById("trim").selectedIndex].text;
   const year = document.getElementById("year").options[document.getElementById("year").selectedIndex].text;
   const vehiclePara = document.getElementById("vehicle");
   vehiclePara.textContent = make + " " + model + " " + trim + " " + year;
 }

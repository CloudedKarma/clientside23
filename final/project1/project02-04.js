/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: 
      Date:   

      Filename: project02-04.js
*/

// Define Constants
const CHICKEN_PRICE = 10.95;
const HALIBUT_PRICE = 13.95;
const BURGER_PRICE = 9.95;
const SALMON_PRICE = 18.95;
const SALAD_PRICE = 7.95;
const SALES_TAX = 0.07;

// Add onchange action to each quantity input element
document.getElementById("chickenQty").onchange = calcTotal;
document.getElementById("halibutQty").onchange = calcTotal;
document.getElementById("burgerQty").onchange = calcTotal;
document.getElementById("salmonQty").onchange = calcTotal;
document.getElementById("saladQty").onchange = calcTotal;

// Define the function to calculate the total
function calcTotal() {
  let cost = 0;
  let qty = 0;
  
  let buyChicken = document.getElementById("chicken").checked;
  let chickenQty = document.getElementById("chickenQty").value;
  let buyHalibut = document.getElementById("halibut").checked;
  let halibutQty = document.getElementById("halibutQty").value;
  let buyBurger = document.getElementById("burger").checked;
  let burgerQty = document.getElementById("burgerQty").value;
  let buySalmon = document.getElementById("salmon").checked;
  let salmonQty = document.getElementById("salmonQty").value;
  let buySalad = document.getElementById("salad").checked;
  let saladQty = document.getElementById("saladQty").value;

  cost += (buyChicken) ? (CHICKEN_PRICE * chickenQty) : 0;
  cost += (buyHalibut) ? (HALIBUT_PRICE * halibutQty) : 0;
  cost += (buyBurger) ? (BURGER_PRICE * burgerQty) : 0;
  cost += (buySalmon) ? (SALMON_PRICE * salmonQty) : 0;
  cost += (buySalad) ? (SALAD_PRICE * saladQty) : 0;

  // Update the foodTotal element in the HTML with a formatted cost value 
  document.getElementById("foodTotal").innerHTML = formatCurrency(cost);

  // Calculate the tax and update the foodTax element in the HTML with the formatted tax value
  let tax = cost * SALES_TAX;
  document.getElementById("foodTax").innerHTML = formatCurrency(tax);

  // Calculate the total cost of the bill
  let totalCost = cost + tax;
  document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);
}

// Function to display a numeric value as a text string in the format $##.##
function formatCurrency(value) {
  return "$" + value.toFixed(2);
}

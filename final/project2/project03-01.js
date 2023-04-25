/*
   JavaScript 7th Edition
   Chapter 3
   Project 03-01

   Application to calculate total order cost
   Author: 
   Date:   

   Filename: project03-01.js
*/

// Get the collection of menu items
const menuItems = document.querySelectorAll('input[type="checkbox"], input[type="number"]');

// Loop through the collection and add event listeners
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('input', calcTotal);
}

// Calculate the total cost of the order
function calcTotal() {
  let orderTotal = 0;
  let grandTotal = 0;
  let tax = 0;
  for (let i = 0; i < menuItems.length; i += 2) {
    if (menuItems[i].checked && menuItems[i+1].value > 0) {
      const price = Number(menuItems[i].value);
      const quantity = Number(menuItems[i+1].value);
      orderTotal += price * quantity;
      tax = (orderTotal * 1.07) - orderTotal;
      grandTotal = orderTotal + tax;
    }
  }
  document.getElementById('billTotal').innerHTML = formatCurrency(orderTotal);
  document.getElementById('taxtotal').innerHTML = formatCurrency(tax);
  document.getElementById('grandTotal').innerHTML = formatCurrency(grandTotal);
}

// Helper function to format a number as currency
function formatCurrency(amount) {
  return '$' + amount.toFixed(2);
}

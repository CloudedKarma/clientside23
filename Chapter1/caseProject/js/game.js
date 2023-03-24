const GTA = 59.99;
const MINECRAFT = 49.99;
const HOGWARTS = 60.99;
const HALO = 39.99;
const TAX = 0.07;
const DISCOUNT = 0.1;

const estimateElem = document.getElementById("estimate");
const taxElem = document.getElementById("tax");
const totalElem = document.getElementById("total");
const qtyElem = document.getElementById("qty");
const discountElem = document.getElementById("discount");
const buttonAddElem = document.getElementById("buttonAdd");

document.getElementById("gta").onclick = getEstimate;
document.getElementById("minecraft").onclick = getEstimate;
document.getElementById("hogwarts").onclick = getEstimate;
document.getElementById("halo").onclick = getEstimate;
qtyElem.onchange = getEstimate;
discountElem.onclick = getEstimate;

function getEstimate() {
  let cost = 0;
  let buyGta = document.getElementById("gta").checked;
  let buyMinecraft = document.getElementById("minecraft").checked;
  let buyHogwarts = document.getElementById("hogwarts").checked;
  let buyHalo = document.getElementById("halo").checked;

  cost += buyGta ? GTA : 0;
  cost += buyMinecraft ? MINECRAFT : 0;
  cost += buyHogwarts ? HOGWARTS : 0;
  cost += buyHalo ? HALO : 0;

  let quantity = parseInt(qtyElem.value);

  if (quantity > 0) {
    let newCost = cost * quantity;
    estimateElem.innerHTML = formatCurrency(newCost);

    let newTax = newCost * TAX;
    taxElem.innerHTML = formatCurrency(newTax);

    let newTotal = newCost + newTax;
    if (document.getElementById("discount").checked) {
      newTotal = newTotal * (1 - DISCOUNT);
    }
    totalElem.innerHTML = formatCurrency(newTotal);

    qtyElem.classList.remove("is-invalid");
    buttonAddElem.disabled = false;
  } else {
    estimateElem.innerHTML = "$0.00";
    taxElem.innerHTML = "$0.00";
    totalElem.innerHTML = "$0.00";

    qtyElem.classList.add("is-invalid");
    buttonAddElem.disabled = true;
  }
}

function formatCurrency(value) {
  return "$" + value.toFixed(2);
}

buttonAddElem.onclick = function() {
  alert("Your total is: " + totalElem.innerHTML);
}



 
// let gta = "gta.jpg";
// let minecraft = "minecraft.jpg";
// let hogwarts = "hogwarts.jpg";
// let halo = "halo.jpg";

// document.getElementById("gta").onclick = function() {
//     document.getElementById("gameImg").src = gta;
//  }
//  document.getElementById("minecraft").onclick = function() {
//     document.getElementById("gameImg").src = minecraft;
//  }
//  document.getElementById("hogwarts").onclick = function() {
//     document.getElementById("gameImg").src = hogwarts;
//  }
//  document.getElementById("halo").onclick = function() {
//     document.getElementById("gameImg").src = halo;
//  }

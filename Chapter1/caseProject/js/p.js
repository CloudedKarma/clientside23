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
  
    let qIndex = document.getElementById("qty").selectedIndex;
    let quantity = document.getElementById("qty")[qIndex].value;
  
    if (quantity > 0) 
    {
      let newCost = cost * quantity;
      document.getElementById("estimate").innerHTML = formatCurrency(newCost);
  
      let newTax = newCost * TAX;
      document.getElementById("tax").innerHTML = formatCurrency(newTax);
  
      let newTotal = newCost + newTax;
      document.getElementById("total").innerHTML = formatCurrency(newTotal);
  
      document.getElementById("qty-error").style.display = "none";
    } 
    else 
    {
      document.getElementById("estimate").innerHTML = "$0.00";
      document.getElementById("tax").innerHTML = "$0.00";
      document.getElementById("total").innerHTML = "$0.00";
  
      document.getElementById("qty-error").style.display = "block";
      document.getElementById("buttonAdd").disabled = true;
      return;
    }
    
    let discount = document.getElementById("discount");
    let newTotal = cost * quantity;
    
    if (discount.checked)
    {
      newTotal *= (1 - DISCOUNT);
    }
  
    let newTax = newTotal * TAX;
    let newGrandTotal = newTotal + newTax;
    document.getElementById("tax").innerHTML = formatCurrency(newTax);
    document.getElementById("total").innerHTML = formatCurrency(newGrandTotal);
  
    document.getElementById("buttonAdd").disabled = false;
    document.getElementById("buttonAdd").onclick = function() {
      alert("Your total is: " + formatCurrency(newGrandTotal));
    };
  }
  
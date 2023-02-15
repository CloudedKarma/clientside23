const GTA = 59.99;
const MINECRAFT = 49.99;
const HOGWARTS = 60.99;
const HALO = 39.99;
const TAX = 0.07;

document.getElementById("gta").onclick = getEstimate;
document.getElementById("minecraft").onclick = getEstimate;
document.getElementById("hogwarts").onclick = getEstimate;
document.getElementById("halo").onclick = getEstimate;

function getEstimate()
{
    let cost = 0;
    let buyGta = document.getElementById("gta").checked;
    let buyMincraft = document.getElementById("minecraft").checked;
    let buyHogwarts = document.getElementById("hogwarts").checked;
    let buyHalo = document.getElementById("halo").checked;
 
    cost += (buyGta) ? GTA : 0;
    cost += (buyMincraft) ? MINECRAFT : 0;
    cost += (buyHogwarts) ? HOGWARTS : 0;
    cost += (buyHalo) ? HALO : 0;

    document.getElementById("estimate").innerHTML = formatCurrency(cost);

    let tax = cost * TAX;
    document.getElementById("tax").innerHTML = formatCurrency(tax);

    let total = cost + tax;
    document.getElementById("total").innerHTML = formatCurrency(total);
}
function formatCurrency(value) 
{
    return "$" + value.toFixed(2);
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

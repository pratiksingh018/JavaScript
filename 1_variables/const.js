// const = a variable that cam't be changed

const discount = 14;
let amount;
let quantity;
let total;

document.getElementById("mySubmit").onclick = function(){
    amount = document.getElementById("myText").value;
    amount = Number(amount);
    quantity = document.getElementById("myFile").value;
    quantity = Number(quantity);
    total = quantity * amount *(discount / 100);
    document.getElementById("h3").textContent = total;

}


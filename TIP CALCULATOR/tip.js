function display() {
    let billAmt = parseFloat(document.getElementById("amt").value);
    let tipPercentage = parseFloat(document.getElementById("per").value);

    if (isNaN(billAmt) || isNaN(tipPercentage)) {
        alert("Please enter valid numbers for bill amount and tip percentage.");
        return;
    }

    let tipAmt = billAmt * (tipPercentage / 100);
    let total = parseFloat(billAmt) + parseFloat(tipAmt);

    // Update input elements with the calculated values
    document.getElementById("tip").value = tipAmt;
    document.getElementById("net").value = total;
}
document.addEventListener("keypress", function(e){
    if (e.key === "Enter" || e.which == 13){
      display();
    }
}, false);
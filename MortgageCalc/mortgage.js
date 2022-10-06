"use strict";

window.onload = init;

function init() {
    const calculateBtn = document.getElementById("calculateBtn");

    // calculateBtn.onclick = calculateBtnClicked;
    //prevent page reload when form is submitted
    calculateBtn.addEventListener("click", calculateBtnClicked, false);
}


//M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1].
// M = Total monthly payment.
// P = The total amount of your loan.
// I = Your interest rate, as a monthly percentage.
// N = The total amount of months in your timeline for paying off your mortgage.
function calculateBtnClicked() {

    //find the HTML elements
    const loanAmount = document.getElementById("loanAmount");
    const loanTerm = document.getElementById("loanTerm");
    const loanInterest = document.getElementById("loanInterest");
    const monthlyCost = document.getElementById("monthlyCost");
    const sumAmount = document.getElementById("sumAmount");

    //get user input
    let amount = parseFloat(loanAmount.value);
    // number of months
    //
    let term = parseFloat(loanTerm.value) * 12;

    // years to months
    let interest = parseFloat(loanInterest.value) / (100 * 12);

    // console.log(amount);
    // console.log(term);
    // console.log(interest);

    let monthly =
        (amount * (interest * Math.pow(1 + interest, term))) /
        (Math.pow(1 + interest, term) - 1);
    let totalCost = monthly * term;

    monthlyCost.innerHTML = `$${monthly.toFixed(2)}`;
    sumAmount.innerText = `$${totalCost.toFixed(2)}`;

    console.log(monthly.toFixed(2));
    console.log(totalCost.toFixed(2));

    event.preventDefault();
}

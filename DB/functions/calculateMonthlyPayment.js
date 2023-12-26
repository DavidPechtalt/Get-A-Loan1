/**
 * Calculates the monthly payment for an amortizing loan using the Spitzer amortization table.
 * @param {number} su - The total loan amount (principal).
 * @param {number} numPayments - The total number of monthly payments.
 * @param {number} interestRate - The annual interest rate (expressed as a decimal).
 * @returns {number} - The monthly payment amount.
 */
function calculateMonthlyPayment(su, numPayments, interestRate) {
    // Convert annual interest rate to monthly interest rate
    const monthlyInterestRate = interestRate / 12;

    // Calculate the monthly payment using the Spitzer formula
    const numerator = su * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numPayments);
    const denominator = Math.pow(1 + monthlyInterestRate, numPayments) - 1;
    const monthlyPayment = numerator / denominator;

    return monthlyPayment;
}

// Example usage:
// const loanAmount = 10000; // Principal amount
// const numberOfPayments = 36; // Number of monthly payments
// const annualInterestRate = 0.05; // Annual interest rate (5%)
// const monthlyPayment = calculateMonthlyPayment(loanAmount, numberOfPayments, annualInterestRate);
// console.log(`Monthly payment: $${monthlyPayment.toFixed(2)}`);
module.exports = {calculateMonthlyPayment};
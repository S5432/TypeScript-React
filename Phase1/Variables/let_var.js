"use strict";
// console.log("Hello")
let username = "Subhash";
console.log(username);
//let is used to declare a variable whose value can change later.
// Real World Examples:
// searchBox
let searchBox = "Java";
console.log(searchBox);
searchBox = "TypeScript";
console.log(searchBox);
// Shopping Cart
let quantity = 1;
console.log(quantity);
quantity = 2;
console.log(quantity);
quantity = 3;
console.log(quantity);
// Pagination
let currentPage = 1;
console.log(currentPage);
currentPage = 5;
console.log(currentPage);
// React Example
function calculateTotal(price, quantity) {
    let total = price * quantity;
    if (quantity > 10) {
        total = total * .9;
    }
    return total;
}
let result = calculateTotal(150, 12);
console.log(result);
// Enterprise Example:
let paymentStatus = "Pending";
console.log(paymentStatus);
// Payment Completed
paymentStatus = "Paid";
console.log(paymentStatus);

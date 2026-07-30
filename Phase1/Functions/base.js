"use strict";
// console.log("Hello Function!!")
// without function
console.log("Welcome Subahsh.");
console.log("Welcome Aman.");
console.log("Welcome Amit.");
// With function
function welcome(name) {
    console.log(`Welcome ${name}`);
}
welcome("Subhash");
welcome("Aman");
welcome("Amit");
console.log("==========================");
function add(a, b) {
    return a + b;
}
console.log("Addition", add(10, 20));
function greet(name) {
    return `Hello ${name}`;
}
console.log(greet("Subhash"));
// Function Type Variable
// function can alos stored in variable.
let calculate;
calculate = (x, y) => x + y;
console.log(calculate(10, 50));
// Payment Calculator
let calculateGST;
calculateGST = (price) => price * 0.18;
console.log(calculateGST(100));
// Optional Parameters
function greet1(name) {
    console.log("Welcome", name);
}
greet1();
greet1("Subhash");
// both are correct
// Real world example: 
function search(keyword) {
    console.log(keyword);
}
search();
search("laptop");
// Best Practice Optional parameter comers after required parameter
function login(email, rememberMe) {
    console.log(email, rememberMe);
}
console.log(login("s@gmail.com", true));
console.log(login("s@gmail.com"));
// Default parameters
function greet2(name = "Guest") {
    console.log("Welcome", name);
}
greet2();
greet2("Subhash");
// Real world example :
function loadUsers(page = 1) {
    console.log("current page:", page);
}
loadUsers(2);
loadUsers();
// Rest Parameters
// function total(...price:number[]){
//     return price
// }
// console.log(total(100))
// console.log(total(100,200,300))
function total(...prices) {
    return prices.reduce((sum, price) => sum + price, 0);
}
console.log(total(100, 20, 30));
// Real world example :  shopping cart
// Arrow Function
// a shorter way to write function and bing laxical this
// traditional:
function add1(a, b) {
    return a + b;
}
console.log(add1(150, 60));
// Arrow function
const add2 = (a, b) => {
    return a + b;
};
console.log(add2(500, 600));
// shorter version
const add3 = (a, b) => a + b;
console.log(add3(500, 100));
// Use in react:
const Home = () => {
};
const handleClick = () => {
};
// API
// users.map(user=>user.name) 
// Return Types: 
// number
function square(n) {
    return n * n;
}
console.log(square(5));
// string
function welcome3(name) {
    return `Hello ${name}`;
}
console.log(welcome3("Subhash"));
// boolean
function isAdult(age) {
    return age >= 18;
}
console.log(isAdult(26));
// void
// when function return nothing
function printName(name) {
    console.log(name);
}
printName("Subhash");
// Real world use cases:
// Logging
function logger(message) {
    console.log(message);
}
console.log(logger("Pipeline execute succesfully."));
// React Example
const handleClick2 = () => {
    console.log("Clicked");
};
console.log(handleClick2);
function calculateTotal(taxRate = 0.18, ...products) {
    const subTotal = products.reduce((sum, product) => sum + product.price, 0);
    return subTotal * (1 + taxRate);
}
const total1 = calculateTotal(0.18, { id: 1, name: "Laptop", price: 50000 }, { id: 2, name: "Beg", price: 100 }, { id: 3, name: "Mobile", price: 5000 });
console.log(total1);

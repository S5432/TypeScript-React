"use strict";
// console.log("Hello")
//# Why Use Explicit Typing?
// Sometimes TypeScript cannot infer the correct type.
// Sometimes you want to make your code more readable.
// Sometimes a variable starts without a value.
let username = "Subhash";
console.log(username);
// Real World Examples: 
// API Response:
let token;
token = "abc12345";
console.log(token);
// Optional User:
let currentUSer = null;
// currentUSer = "Subhash"
console.log(currentUSer);
// User List
let users = [];
users = ["Subhash", "Solanki"];
console.log(users);
// Product
let product;
// React Example :
// const [loading, setLoading] = useState<boolean>(false);
// Enterprise Example:
function calculateTax(price) {
    return price * 0.18;
}
console.log(calculateTax(100));

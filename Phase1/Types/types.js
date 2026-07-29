"use strict";
console.log("Premitive Types started here ....");
let userName = "Subhash";
console.log(userName);
let age = 25;
console.log(age);
let isDeveloper = true;
console.log(isDeveloper);
// 1: String
let userName1 = "Subhash";
console.log(userName1);
let city;
city = "Indore";
console.log(city);
// Real World Examples:
// User Profile:
let firstName = "Subhash";
let lastName = "Prajapat";
console.log(firstName);
console.log(lastName);
// Login Form:
let email = "abc@gmail.com";
let password = "MyPassWord123";
console.log(email);
console.log(password);
// Product:
let productName = "iPhone 17";
console.log(productName);
// API Response;
let token = "eNgjrjkf";
console.log(token);
// string method:
let language = "TypeScript";
console.log(language.length);
console.log(language.toUpperCase);
console.log(language.toLowerCase);
console.log(language.includes("Script"));
console.log(language.startsWith("Type"));
// Template Strings
let userName2 = "Subhash";
let age2 = 25;
let intro = `My Name is ${userName2} and I am ${age2} years old.`;
console.log(intro);
// Number
//Represents numeric values.
//Both integers and decimals use the same type.
let age3 = 26;
// Real World Example:
// Ecommerce:
let price1 = 999;
console.log(price1);
// Employee
let salary2 = 850000;
console.log(salary2);
// AI Application
let confidenceScore = 0.95;
console.log(confidenceScore);
// pagination
let currentPage = 1;
console.log(currentPage);
// Mathematical Operations:
let x = 10;
let y = 5;
console.log(x + y);
console.log(x * y);
console.log(x - y);
console.log(x / y);
// Boolean:
// Boolean can have only two values: true/false
let isLoggedIn = true;
console.log(isLoggedIn);
// Real World Examples:
// Authentification:
let isLoggedIn1 = true;
console.log(isLoggedIn1);
// Admin:
let isAdmin = false;
console.log(isAdmin);
// Payment
let paymentCompleted = true;
console.log(paymentCompleted);
// AI chatbot
let isTyping = false;
console.log(isTyping);
// React
// const [loading, setLoading] = useState<boolean>(false);
// Conditional:
if (isLoggedIn1) {
    console.log("Welcome!");
}
// null
let manager = null;
console.log(manager);
manager = "Subhash";
console.log(manager);
// best practice : Always check for null before using the value.
if (manager !== null) {
    console.log(manager.toUpperCase());
}
//undefined:
let phone;
console.log(phone);
phone = "7884544454554";
console.log(phone);
// type User = {
//     phone?: string;
// }
// console.log(User)
// symbol: Use symbols only when uniqueness is required. They are uncommon in everyday React application code.
// const id1 = Symbol("id");
// const id2 = Symbol("id");
// console.log(id1 === id2);
const userId = Symbol("userId");
const user = {
    name: "Subhash",
    [userId]: 101
};
console.log(user[userId]);
// bigint is used for integers that are larger than JavaScript's safe integer limit.
const population = 900719925474099100n;
console.log(population);

"use strict";
// console.log("Hello,")
let employee = {
    name: "Subhash",
    age: 26,
    department: "AI",
};
console.log(employee);
const employee1 = {
    name: "Subhash",
    age: 26,
    department: "AI"
};
console.log(employee1);
// Real World Example:
// User Profile:
const user = {
    id: 1,
    name: "Sourabh",
    email: "s@gmail.com",
    isVerified: true,
};
console.log(user);
// Product:
const product = {
    id: 10,
    title: "Laptop",
    price: 1200,
    stock: 15,
};
console.log(product);
// React Example: 
// type UserProps = {
//     name: string;
//     age: number;
// };
// function UserCard(user: UserProps){
//     return <h1> {user.name} </h1>
// }
// Array: 
let fruits = ["Apple", "Banana"];
console.log(fruits);
let numbers = [10, 20, 30];
console.log(numbers);
// Real Worls Examples:
const users = [
    "Subhash",
    "roanak",
    "Aman",
];
console.log(users);
// Prices:
// const prices:number[]=[10,50,90];
// console.log(prices)
// REact Example:
// const products:string[]=["laptop","mobile"];
// products.map(product=.(
//     <li key = {product}> {product} </li>
// ))
// Array Methods:
const prices = [10, 50, 90];
console.log(prices);
prices.push(40);
prices.pop();
prices.filter(n => n > 20);
prices.map(n => n * 2);
prices.find(n => n === 50);
console.log(prices);
console.log("Array End Here ------------------------------------");
console.log("========================");
//Tuple
let employeetup = [101, "Subhash"];
console.log(employeetup);
// Real World Example:
// API Response:
const response = [
    200,
    "Success",
];
console.log(response);
// Coordinates:
const location1 = [
    22.5565,
    56.5555,
];
console.log(location1);
// React Example: 
// const[count, setCount] = useSate(0)
// Enum:
var Status;
(function (Status) {
    Status[Status["Pending"] = 0] = "Pending";
    Status[Status["Approved"] = 1] = "Approved";
    Status[Status["Rejected"] = 2] = "Rejected";
})(Status || (Status = {}));
console.log(Status);
//Usage
let orderStatus = Status.Approved;
console.log(orderStatus);
// String Enum
var Role;
(function (Role) {
    Role["Admin"] = "ADMIN";
    Role["User"] = "USER";
    Role["Manager"] = "MANAGER";
})(Role || (Role = {}));
// Real-World Example
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus[PaymentStatus["Pending"] = 0] = "Pending";
    PaymentStatus[PaymentStatus["Paid"] = 1] = "Paid";
    PaymentStatus[PaymentStatus["Failed"] = 2] = "Failed";
})(PaymentStatus || (PaymentStatus = {}));
console.log(PaymentStatus);
// Literal Types:
let theme;
theme = "light";
// theme = "blue" // not allowed
console.log(theme);

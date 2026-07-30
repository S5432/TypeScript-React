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
function combine1(num1, num2, conversionType) {
    let result;
    if (typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number") {
        result = +num1 + +num2;
    }
    else {
        result = num1.toString() + " " + num2.toString();
    }
    return result;
}
const sum1 = combine1("10", "20", "as-number"); // 30
const sum2 = combine1(10, 50, "as-number");
const combinedName = combine1("Patel", " MernStack", "as-string"); // Patel MernStack
console.log(sum1, sum2, combinedName);
// 6: Union Types: 
// one variable can have multiple possible types:
let id;
id = 10;
console.log(id);
id = "EMP101";
console.log(id);
// Best Practice: 
// when using unions , narrow the type before calling type-specific methods.
function printId(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id.toFixed(0));
    }
}
console.log(printId("Em-p101"));
console.log(printId(101));
function combine(num1, num2) {
    let result;
    if (typeof num1 === "number" && typeof num2 === "number") {
        result = num1 + num2;
    }
    else {
        result = num1.toString() + " " + num2.toString();
    }
    return result;
}
console.log(combine(10, 20));
console.log(combine("patel", "Manas"));
function combine2(num1, num2, conversionType) {
    let result;
    if (typeof num1 === "number" && num2 === "number" || conversionType === "as-number") {
        result = +num1 + +num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
const sum11 = combine("10", "20"); // 30
const sum22 = combine(10, 50);
const combinedName1 = combine("Patel", " MernStack"); // Patel MernStack
console.log(sum11, sum22, combinedName1);
const user1 = {
    name: "Subhash",
    age: 26,
    skills: ["React", "typeScript"]
};
console.log(user1);
function greet3(user1) {
    console.log(`Hi, I am ${user1.name}`);
}
greet3(user1);
const staff = {
    name: "Subhash",
    salary: 85000,
};
console.log(staff);
const identifyUser = {
    id: 101,
    name: "Subhash",
    canEdit: true,
};
console.log(identifyUser);
// any
// any disables type script type checking.
// Everything is allowed.
let value = 10;
value = "Hello";
console.log(value);
value = true;
console.log(value);
value = {};
console.log(value);
// unknown
// unknown is the safe version of any.
let value2;
value2 = "hello";
// value2.toUpperCase();
// Error : This is not allowed:
// you must first check the type.
if (typeof value2 === "string") {
    console.log(value2.toUpperCase());
}
function area(shape) {
    switch (shape) {
        case "circle":
            return 10;
        case "square":
            return 20;
        default: {
            const exhaustive = shape;
            return exhaustive;
        }
    }
}
console.log(area("circle"));
// void :  a function does not return a value.
function greet4() {
    console.log("Hello.");
}
greet4();
// Real World Example: 
function logMessage(message) {
    console.log(message);
}
logMessage("THis is log message");
// Reaqct event handler
function handleClick() {
    console.log("Button Clicked.");
}
handleClick();

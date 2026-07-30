"use strict";
// console.log("Hello Object");
const user = {
    id: 1,
    name: "Subhash",
    email: "subhash@gmail.com"
};
console.log(user);
// syntax
const employee = {
    id: 1,
    name: "Subhash",
    salary: 85000
};
console.log(employee);
// Real World Examples:
// Product:
const product = {
    id: 101,
    title: "Laptop",
    price: 58000,
    inStock: true
};
console.log(product);
console.log(product.title);
// Employee:
const employee1 = {
    id: 101,
    name: "Subhash",
    department: "AI/ML",
    salary: 850000
};
console.log(employee1);
console.log(employee1.department);
employee1.department = "Full Stack";
console.log(employee1.department);
console.log(employee1);
const userResponse = {
    id: 101,
    email: "s@gmail.com",
    role: "Admin",
    isActive: true
};
console.log(userResponse);
const employee2 = {
    id: 1,
    name: "Subhash",
    address: {
        city: "Indore",
        state: "MP",
        country: "IND",
        pincode: 12345
    }
};
console.log(employee2);
console.log(employee2.address);
console.log(employee2.address.pincode);
// Healthcare System:
const patient = {
    id: 10,
    personalInfo: {
        name: "Subhash",
        age: 26,
    },
    emergencyContact: {
        name: "Amit",
        phone: 1234567890,
    }
};
console.log(patient);
console.log(patient.personalInfo);
console.log(patient.emergencyContact);
const user1 = {
    id: 1,
    name: "Subhash"
};
console.log(user1);
user1.name = "Kamal";
console.log(user1);
const user2 = {
    name: "Subhash"
};
console.log(user2);
const user3 = {
    name: "Subhash",
    phone: "7786554645"
};
console.log(user3);
// ## Best Practice
// Always check whether an optional property exists before using it.
if (user2.phone) {
    console.log(user2.phone);
}
// Example:
const error = {
    email: "Invalid Email",
    password: "Password is required",
    username: "Already exists"
};
console.log(error);
const messages = {
    welcome: "Welcome",
    logout: "Logout",
    profile: "Profile"
};
console.log(messages);

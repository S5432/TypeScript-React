// console.log("Hello,")

let employee:{
    name:string;
    age:number;
    department:string;
} = {
    name: "Subhash",
    age:26,
    department:"AI",
};

console.log(employee)


const employee1 = {
    name:"Subhash",
    age:26,
    department:"AI"
}

console.log(employee1)


// Real World Example:
// User Profile:

const user = {
    id:1,
    name: "Sourabh",
    email:"s@gmail.com",
    isVerified: true,
}

console.log(user)


// Product:
const product = {
    id:10,
    title: "Laptop",
    price: 1200,
    stock: 15,
}

console.log(product)


// React Example: 
// type UserProps = {
//     name: string;
//     age: number;
// };

// function UserCard(user: UserProps){
//     return <h1> {user.name} </h1>
// }



// Array: 
let fruits: string[] = ["Apple","Banana"];
console.log(fruits);

let numbers: Array<number> = [10,20,30];
console.log(numbers)


// Real Worls Examples:
const users:string[]=[
    "Subhash",
    "roanak",
    "Aman",
]

console.log(users)


// Prices:
// const prices:number[]=[10,50,90];
// console.log(prices)




// REact Example:
// const products:string[]=["laptop","mobile"];

// products.map(product=.(
//     <li key = {product}> {product} </li>
// ))

// Array Methods:


const prices:number[]=[10,50,90];
console.log(prices)

prices.push(40);
prices.pop();
prices.filter(n=>n>20)
prices.map(n=> n*2)
prices.find(n=>n===50)
console.log(prices)

console.log("Array End Here ------------------------------------")
console.log("========================")



//Tuple
let employeetup:[number,string] = [101, "Subhash"]
console.log(employeetup)


// Real World Example:
// API Response:
const response:[number,string]=[
    200,
    "Success",
]

console.log(response)


// Coordinates:
const location1:[number, number]=[
    22.5565,
    56.5555,
]

console.log(location1)

// React Example: 
// const[count, setCount] = useSate(0)


// Enum:
enum Status {
    Pending,
    Approved,
    Rejected,
}

console.log(Status)

//Usage
let orderStatus = Status.Approved
console.log(orderStatus)


// String Enum
enum Role{
    Admin = "ADMIN",
    User = "USER",
    Manager = "MANAGER",
}

// Real-World Example
enum PaymentStatus {
    Pending,
    Paid,
    Failed,
}

console.log(PaymentStatus)


// Literal Types:
let theme: "light" |"dark";
theme = "light"
// theme = "blue" // not allowed
console.log(theme)


// Real world Example:

// Theme:
type Theme = "light"|"dark";

// User Role:
type UserRole = "admin"|"user";

// API Method:
type HttpMethod = "GET"|"POST";


function combine1(num1:number|string, num2:number|string, conversionType: "as-number" | "as-string"){
    let result;
    if(typeof num1 === "number" && typeof num2 === "number" || conversionType==="as-number"){
        result = +num1 + +num2;
    }
    else{
        result = num1.toString() + " " + num2.toString();
    }
    return result
}

const sum1 = combine1("10", "20", "as-number"); // 30
const sum2 = combine1(10, 50, "as-number");
const combinedName = combine1("Patel", " MernStack", "as-string"); // Patel MernStack
console.log(sum1, sum2, combinedName);



// 6: Union Types: 
// one variable can have multiple possible types:
let id: string | number;

id = 10
console.log(id)
id = "EMP101"
console.log(id)


// API
type ApiResponse = 
|string
|number
|null;

// React Props : 
type ButtonSize = "small"|"medium"|"large";


// Best Practice: 
// when using unions , narrow the type before calling type-specific methods.

function printId(id:string|number){
    if (typeof id === "string"){
        console.log(id.toUpperCase())
    }
    else{
        console.log(id.toFixed(0))
    }
}

console.log(printId("Em-p101"))
console.log(printId(101))


function combine(num1:number|string, num2:number|string){
    let result;
    if(typeof num1==="number" && typeof num2==="number"){
        result = num1 + num2;
    }else{
        result = num1.toString() + " " + num2.toString();
    }
    return result;
}

console.log(combine(10,20))
console.log(combine("patel","Manas"))

// Type Alias / Custom Types

type Combinable = number | string;
type ConversionType = "as-number" | "as-string";

function combine2(num1:Combinable,num2:Combinable , conversionType : ConversionType){
    let result;
    if(typeof num1 === "number" && num2 === "number" || conversionType === "as-number"){
        result = +num1 + +num2;
    }else{
        result = num1.toString() + num2.toString();
    }
    return result;
}


const sum11 = combine("10", "20"); // 30
const sum22 = combine(10, 50);
const combinedName1 = combine("Patel", " MernStack"); // Patel MernStack
console.log(sum11, sum22, combinedName1);



type User = {
    name: string;
    age : number;
    skills: string[];
}

const user1:User = {
    name:"Subhash",
    age: 26,
    skills : ["React", "typeScript"]
}

console.log(user1)


function greet3(user1:User){
    console.log(`Hi, I am ${user1.name}`)
}

greet3(user1)




// intersection types: 
// An intersection combine multiple type into one.

type Person2 = {
    name: string;
}

type Employee2 = {
    salary:number;
}

type Staff = Person2 & Employee2;

const staff: Staff = {
    name: "Subhash",
    salary: 85000,
}

console.log(staff)

// Real World Example: 
// Combining User information with permission.

type User3 ={
    id: number;
    name: string;
}

type Permission = {
    canEdit : boolean;
}

type Admin = User3 & Permission;

const identifyUser: Admin = {
    id : 101,
    name :"Subhash",
    canEdit:true,
}

console.log(identifyUser)


// any

// any disables type script type checking.
// Everything is allowed.
let value :any = 10;
value = "Hello";
console.log(value);
value = true;
console.log(value);
value = {};
console.log(value);


// unknown
// unknown is the safe version of any.

let value2: unknown;
value2 = "hello";

// value2.toUpperCase();
// Error : This is not allowed:


// you must first check the type.
if(typeof value2 === "string"){
    console.log(value2.toUpperCase())
}


// never:
// never represents values that never occur.

// function throwError(message:string):never{
//     throw new Error(message)
// }

// console.log(throwError("Error Message"))
//The function never returns.


type Shape = "circle" | "square";

function area(shape: Shape) {
  switch (shape) {
    case "circle":
      return 10;
    case "square":
      return 20;
    default: {
      const exhaustive: never = shape;
      return exhaustive;
    }
  }
}

console.log(area("circle"))  



// void :  a function does not return a value.

function greet4():void{
    console.log("Hello.")

}

greet4()


// Real World Example: 
function logMessage(message: string):void{
    console.log(message)
}

logMessage("THis is log message")


// Reaqct event handler
function handleClick():void{
    console.log("Button Clicked.")
}

handleClick()
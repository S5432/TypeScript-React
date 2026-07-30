// console.log("Hello Function!!")

// without function

console.log("Welcome Subahsh.")
console.log("Welcome Aman.")
console.log("Welcome Amit.")


// With function

function welcome(name:string){
    console.log(`Welcome ${name}`)
}

welcome("Subhash")
welcome("Aman")
welcome("Amit")
console.log("==========================")


function add(a:number,b:number):number{
    return a+b;
}

console.log("Addition", add(10,20));


function greet(name:string):string{
    return `Hello ${name}`
}

console.log(greet("Subhash"))


// Function Type Variable
// function can alos stored in variable.

let calculate:(a:number,b:number)=>number;

calculate = (x,y)=> x+y;
console.log(calculate(10,50))

// Payment Calculator
let calculateGST: (price:number)=>number;

calculateGST = (price)=>price*0.18;
console.log(calculateGST(100))

// React Example: 
type ButtonProps={
    onClick: () => void;
};



// Optional Parameters
function greet1(name?:string){
   console.log("Welcome",name)
}

greet1() 
greet1("Subhash");
// both are correct


// Real world example: 
function search(keyword?:string){
    console.log(keyword)
}
search()
search("laptop")


// React Example: 
type CardProps = {
    title: string;
    subtitle: string;
}


// Best Practice Optional parameter comers after required parameter

function login(email:string, rememberMe?:boolean){
    console.log(email, rememberMe)
}

console.log(login("s@gmail.com",true));
console.log(login("s@gmail.com"));


// Default parameters

function greet2(name:string = "Guest"){
    console.log("Welcome",name);

}

greet2()
greet2("Subhash")


// Real world example :
function loadUsers(page: number = 1){
    console.log("current page:", page)
}

loadUsers(2)
loadUsers()



// Rest Parameters

// function total(...price:number[]){
//     return price
// }

// console.log(total(100))
// console.log(total(100,200,300))


function total(...prices:number[]){
    return prices.reduce(
        (sum,price)=> sum + price,0
    );

}

console.log(total(100,20,30))


// Real world example :  shopping cart


// Arrow Function
// a shorter way to write function and bing laxical this

// traditional:

function add1(a:number,b:number):number{
    return a+b
}

console.log(add1(150,60))

// Arrow function
const add2 = (a:number,b:number):number=>{
    return a+b
}

console.log(add2(500,600))


// shorter version
const add3 = (a:number,b:number):number=>a+b;
console.log(add3(500,100))

// Use in react:
const Home = ()=>{

}

const handleClick = ()=>{

}

// API
// users.map(user=>user.name) 



// Return Types: 

// number
function square(n:number):number{
    return n*n
}

console.log(square(5))


// string
function welcome3(name:string):string{
    return `Hello ${name}`
}

console.log(welcome3("Subhash"))


// boolean
function isAdult(age:number):boolean{
    return age>=18;
}

console.log(isAdult(26))

// void
// when function return nothing
function printName(name:string){
    console.log(name)
}

printName("Subhash")



// Real world use cases:
// Logging
function logger(message: string){
    console.log(message)
}

console.log(logger("Pipeline execute succesfully."))

// React Example
const handleClick2 = ():void=>{
   console.log("Clicked")
}


console.log(handleClick2)


// never 
/// when function never execute successfully .

// Usually because it:

// - throws an error
// - never stops running


// function throError(message:string):never{
//     throw new Error(message)
// }

// console.log(throError("This is normal error"))


// function infiniteLoop(): never {
//     while (true) {
//         // keeps running forever
//     }
// }


// Real world example:
// Authentification



// function unauthorized():never{
//     throw new Error("Unauthorized")
// }

// console.log(unauthorized())



// Compelte Real World Example:
// E-commerce Checkout


type Prodcut = {
    id:number;
    name: string;
    price:number;
}


function calculateTotal(taxRate:number = 0.18, ...products:Prodcut[]){
    const subTotal = products.reduce((sum, product) => sum + product.price,0)
    return subTotal * (1+taxRate);

}

const total1 = calculateTotal(0.18,
    {id:1,name:"Laptop", price: 50000},
    {id:2,name:"Beg", price: 100},
    {id:3,name:"Mobile", price: 5000},

)

console.log(total1)
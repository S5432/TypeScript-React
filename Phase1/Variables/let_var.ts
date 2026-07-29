// console.log("Hello")

let username: string = "Subhash"
console.log(username)


//let is used to declare a variable whose value can change later.
// Real World Examples:
// searchBox


let searchBox:string = "Java";
console.log(searchBox);

searchBox = "TypeScript";
console.log(searchBox);


// Shopping Cart
let quantity:number = 1;
console.log(quantity)

quantity = 2
console.log(quantity)

quantity = 3
console.log(quantity)


// Pagination
let currentPage : number = 1;
console.log(currentPage)

currentPage = 5
console.log(currentPage)


// React Example
function calculateTotal(price:number, quantity:number){
    let total = price* quantity
    if(quantity>10){
        total = total*.9
    }
    return total

}

let result:number = calculateTotal(150,12)
console.log(result)


// Enterprise Example:
let paymentStatus:string = "Pending";
console.log(paymentStatus)
// Payment Completed
paymentStatus = "Paid"
console.log(paymentStatus)

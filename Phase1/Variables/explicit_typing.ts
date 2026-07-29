// console.log("Hello")
//# Why Use Explicit Typing?

// Sometimes TypeScript cannot infer the correct type.
// Sometimes you want to make your code more readable.
// Sometimes a variable starts without a value.

let username : string = "Subhash";
console.log(username)


// Real World Examples: 
// API Response:
let token:string;
token = "abc12345";
console.log(token) 

// Optional User:
let currentUSer:string|null = null;
// currentUSer = "Subhash"
console.log(currentUSer)


// User List
let users: string[] = [];
users = ["Subhash","Solanki"];
console.log(users)


// Product
let product: {
    id:number;
    title:string;
};


// React Example :
// const [loading, setLoading] = useState<boolean>(false);

// Enterprise Example:
function calculateTax(price:number):number {
    return price * 0.18;
}

console.log(calculateTax(100))
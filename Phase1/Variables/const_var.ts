
// `const` declares a variable whose **reference cannot be reassigned**.
//Once you assign a value, you cannot assign a different value to the same variable.


// Real World Use Cases: 

// API URL
const API_URL:string = "https://api.example.com";
console.log(API_URL)

// Tax Rate:
const TAX_RATE:number = 0.18;
console.log(TAX_RATE)

// Company Name
const COMPANY_NAME:string = "ShvetVarni Technologies";
console.log(COMPANY_NAME)


// React Example :
// const UserCard=()=>{
//     return <h1> User </h1>

// }


// API Response
// const users = await fetchUsers();



// # Important Concept

// `const` prevents reassignment, **not mutation**.

const user = {
    name:"Subhash",
}

console.log(user)

user.name = "DevVart"
console.log(user)

// user = {} // not allowed
//The object reference is constant, but its properties can still change unless you make them immutable.


// Enterprise Example:
const MAX_UPLOAD_SIZE:number = 5*1024*1024
console.log(MAX_UPLOAD_SIZE)
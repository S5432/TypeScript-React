
let userName: string = "Subhash";
// userName = "100"
console.log("User Name: ", userName)


type Employee = {
    id:number
    name:string
    salary: number
    department:string
}


let price:number = 500.555
console.log(price.toFixed(2))


type LoginForm = {
    email: string
    password: string
}


const message: string = "Hello, TypeScript!"
console.log(message)


function greet(name:string):string{
    return `Hello, ${name}`
}

console.log(greet("Subhash"))
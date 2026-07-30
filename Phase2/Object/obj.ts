// console.log("Hello Object");

const user = {
    id: 1,
    name:"Subhash",
    email:"subhash@gmail.com"
}


console.log(user)


// syntax
const employee:{
    id:number;
    name: string;
    salary:number;
} = {
    id: 1,
    name:"Subhash",
    salary: 85000
}

console.log(employee)


// Real World Examples:
// Product:
const product:{
    id:number;
    title: string;
    price: number;
    inStock: boolean;
} = {
    id: 101,
    title: "Laptop",
    price: 58000,
    inStock:true

};

console.log(product)
console.log(product.title)


// Employee:
const employee1:{
    id: number;
    name: string;
    department: string;
    salary: number;
} = {

    id: 101,
    name: "Subhash",
    department:"AI/ML",
    salary: 850000

}

console.log(employee1)
console.log(employee1.department)
employee1.department = "Full Stack"
console.log(employee1.department)
console.log(employee1)


// Enterprise Example: 
// API Response: 
type UserResponse = {
    id:number;
    email: string;
    role: string;
    isActive: boolean;
}

const userResponse: UserResponse ={
    id: 101,
    email:"s@gmail.com",
    role:"Admin",
    isActive:true
}

console.log(userResponse)  



// Nested Object: 
type Employee1 = {
    id:number;
    name:string;
    address:{
        city: string;
        state: string;
        country: string;
        pincode:number;
    }
}

const employee2:Employee1 = {
    id:1,
    name: "Subhash",
    address:{
        city:"Indore",
        state:"MP",
        country:"IND",
        pincode:12345
    }
}


console.log(employee2)
console.log(employee2.address)
console.log(employee2.address.pincode) 


// Healthcare System:
const patient:{
    id:number;
    personalInfo: {
        name:string;
        age:number;
    };
    emergencyContact:{
        name:string;
        phone: number;
    }
}={
    id:10,
    personalInfo:{
        name: "Subhash",
        age:26,

    },
    emergencyContact:{
        name:"Amit",
        phone:1234567890,
    }

}

console.log(patient)
console.log(patient.personalInfo)
console.log(patient.emergencyContact)


// React Example:
type ProfileProps = {
    user:{
        name:string;
        address:{
            city:string;
        }
    }
}


// ## Best Practice

// Break deeply nested structures into reusable types.


type Address = {
    city: string;
    state: string;
}

type Employee3 = {
    id:number;
    name:string;
    address: Address;
}


// Readonly:
// readonly means a property can be read but not changed after the object is created.

type User = {
    readonly id:number;
    name: string;
}

const user1:User = {
    id: 1,
    name:"Subhash"
}

console.log(user1)
user1.name = "Kamal";
console.log(user1)

// user1.id = 3;  // error
// console.log(user1)


// Real World Example: 
type Order = {
    readonly orderId: number;
    status: string;
}




// Optional Property
// Not every object has every property.
// Use `?` to mark a property as optional.


type User1 = {
    name:string;
    phone?:string;
}

const user2:User1 = {
    name: "Subhash"
}

console.log(user2);

const user3:User1 = {
    name: "Subhash",
    phone:"7786554645"
}
console.log(user3);
// both are correct


// Real world example :
// API Response: 
type Customer = {
    id: number;
    name:string;
    profileImage?:string;
};



// React Example:
type ButtonProps = {
    text: string;
    icon?:string;
}

// ## Best Practice
// Always check whether an optional property exists before using it.

if(user2.phone) {
    console.log(user2.phone);
}


// Index Signature :

// Syntax: 
type ErrorMessages = {
    [field:string]:string;
}

// Example:
const error: ErrorMessages = {
        email:"Invalid Email",
        password: "Password is required",
        username: "Already exists"
    
}

console.log(error)


// Real World Example: 
// Translate dictionary:
type Dictionary = {
    [key:string]:string;
}

const messages: Dictionary = {
    welcome: "Welcome",
    logout: "Logout",
    profile:"Profile"
}

console.log(messages)
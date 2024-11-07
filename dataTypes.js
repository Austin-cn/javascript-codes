//alert("hello jsclass");
console.log("welcome to our website");

/* varable are container use to hold our data */
//var
//let
//const



var name = "austin";
console.log(name);

let age = 40
console.log(age);

const email = "austinyoleh@gmail.com";
console.log(email); 

/* Deta type */

//we have two type of data types (1) primitive (2) non primitive

//example of primitive data
//string

let name2= "yoleh";
console.log(name2);
// another data type is called Number
//number

let age2 = 25   // this one is call integer
console.log(age2);
let myNumber = 0.94  // the one is called float
console.log(myNumber);

//Boolean has to do with true or false

// true or false
let isMarried = false;
console.log(isMarried);
let isGudMan = true;
console.log(isGudMan);

//undefined when a value is not assigned to a data is called undefined
let notAssigned;
console.log(notAssigned);

//null 
let isActive = null;
console.log(isActive)


// TOPIC NON PRIMITIVE DATA TYPES

//non-primitive data type 
//Array
 

let products = ["bag", "shoes", "cloth", "phone", "laptop"];
console.log(products[4] );

// object

let user = {
    name: " austin",
    age: 100,
    email: "austinyoleh@gmail.com",
    isStudent: false
};

console.log(user);

const user2 = {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    userName: "austinyoleh@gmail.com",
    passWord: "securePassWord123",
    phone: "+1234567890",
    address: {
        street: "123 Main St", 
        city: "Lagos",
        state: "Lagos",
        postalCode: "100001",
        country: "Nigeria",
    },
    dateOfBirth: "1995-12-01",
    isActive: true,
    roles: ["user", "Admin"],
    lastLogin: "2024-10-14T10:30:00Z"
};
 
console.log(user2)


//ASSIGNMENT

let length = 10;
let width  = 10;
let area  = length + width;
console.log(area);

const firstName = "oke";
const lastName = "paul";
const age1 = 30;
const isStudent1 = true; 
const statement = `my name is ${firstName} ${lastName}, i am ${age1} year old and it ${isStudent1} that i am a student`;
console.log(statement);

let feveMovies = ["x-men", "livepool", "rolone", "masterboard", "pastor night"];
console.log(feveMovies);

console.log(feveMovies[0] )
console.log(feveMovies[4])

const book = {
    title: "mr peole",
    author: "per",
    publishedYear: 5,
    genre2: ["comedy", "crime", "sad", "happay",],
    isAvailable: true
};
console.log(book);


let lagos = {
    benin: "benie",
    mosco: "lalala",
    aja: 66,
    zoma: ["manova", "bombom", "valona"],
    isGovernor:true
    
}
console.log(lagos);
const noMoreAboutMe = "principal"
const introduction = "headmaster"
const tellThem = `i am the ${noMoreAboutMe}, and my wife is the ${introduction}`;
console.log(tellThem)

// operators in js are special simboles that performs operations on one or more  files in our js files system.


//1. Arrithemtic operation

// first let talk about the Assignment operator

// Assignment Operator
// this operators assign values to variables 

// assignment

let x = 5 ;
console.log(x)

// addition 
let y = 5 + 1;
console.log(y);
y+= 1;
console.log(y)

// subtraction

let z = 10 - y;
console.log(z)
z-=y
console.log(z)



// addition


let sum = 5 + 3;
console.log(sum);

//subtraction
let difference = 10 - sum;
console.log(difference);

let total = 6 + 54;
console.log(total);
let defiant = 5 - total;
console.log(defiant);

// multiplication
let product = sum * difference;
console.log(product)

//division
let quotient = product/4;
console.log(quotient)

// this modus means how many time can 3 divid 4 and the remainder is 1
// modulus
let remainder = quotient % 3;
console.log(remainder)

let victor = 17 + 6;
console.log(victor);
let ansamta = 23 / 2;
console.log(ansamta)
let lamboMina = ansamta % 6;
console.log(lamboMina)
 

// comparison Operator
// this operator compar values and datatypes and return a boolean value 

//Equal

console.log(5 == "5");


// strict Equal

console.log(5 ==="5");

//one more example of equal

console.log(7 == "7")

//one more example of strict equal
console.log(7 === "7")



//Not Equal: Haven't known that, this operator ( double ==) is use to check and state if datatype are equal or not,
// We also have an opertor that state is not with the exclamation sign (!)Example

console.log(5 != "5") // it will show false

//this stric help to conpliment console.log(5 != "5") to the first statement of (is not !=)
// strict not equal

console.log(5 !== "5")


let n = 3;
let v = 3;

console.log(n !=v)

let p = 3;
let r = 2;

console.log(p !=r)

let pounds = 2700;
let naira = 100;
console.log( pounds != naira)

// strict not equql
console.log(5 !=5)

let m = "austin"
let l =10

console.log(m !==l)

// greater than
console.log(10 > 5)

let g = 12;
let k = 10; 
let c = g + k
console.log(c);

console.log(k > g)

//less than 

console.log(3 <2)

let b = 12;
let i = 10;
let w = 1  - i;
console.log(w);

console.log(c < w);

//greater than and equal

console.log(4 >= 5);
let o = 6;
let q = 6;
let d = o * 2;
console.log(d);

console.log(o >= q);

let j = q - 3;


console.log(d >= j);

//greater than equql

console.log(7 >= 6);

let goal = 50;
let milk = 60;
let eba = 60;
console.log(eba <= milk)

// using logical operators declear four variable that logs boolean value on
// console.
// using comment on the vs code editor explain the meaning and how it function.

// logic operators. This are use to compaire both variables 

// in this kind of logic, if both of the variable is positive it will return positve 
const hasDriverLiccence = true;
const hasInsurance = true;

const carDrive = hasDriverLiccence && hasInsurance;
console.log(carDrive);

const foodManSuplyer = true
const waterGiver = true

const theEater =  foodManSuplyer && waterGiver;
console.log(theEater);

// in this kind of logic, if any of the variable is negetive it will return false 
const isAdult = true;
const isHungery = false;
const canEnter = isAdult && isHungery;
console.log(canEnter);

const dream = true;
const matter = false;
const romotRiver = dream && matter;
console.log(romotRiver);

// in this kind of logic, if any of the variable is positive it will return positve 
const knowsHTML = false;
const knowsCSS = true;
const canDesigneWebsite =   knowsHTML || knowsCSS;
console.log(canDesigneWebsite);

const getouse = false;
const buildPlane = true
const truth = getouse || buildPlane;
console.log(truth);

// in this kind of logic, if any of the variable is negetive it will return false 
const isAdmin = false;
const isSuperUser = false
 
const canAccessPage = isAdmin || isSuperUser;
console.log(canAccessPage)


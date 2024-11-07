// operators in js are special simboles that performs operations on one or more  files in our js files system.


//1. Arrithemtic operation
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


// comparison Operator
// this operator compar values and return a boolean value 

//Equal

console.log(5 == "5");


// strict Equal

console.log(5 ==="5");

//one more example of equal

console.log(7 == "7")

//one more example of strict equal
console.log(7 === "7")



//Not Equal
console.log(5 != "5")

//this stric help to conpliment console.log(5 != "5") to be false
// strict not equal
console.log(5 !== "5")


let n = 3;
let v = 3;

console.log(n !=v)

let p = 3;
let r = 2;

console.log(p !=r)

// strict not equql
console.log(5 !==5)

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
// consle.
// using comment on the vs code editor explain the meaning and how it function.

// logic operators. This are use to compaire both variables 

// in this kind of logic, if any of the variable is positive it will return positve 
const hasDriverLiccence = true;
const hasInsurance = true;

const carDrive = hasDriverLiccence && hasInsurance;
console.log(carDrive);

// in this kind of logic, if any of the variable is negetive it will return false 
const isAdult = true;
const isHungery = false;
const canEnter = isAdult && isHungery;
console.log(canEnter);

// in this kind of logic, if any of the variable is positive it will return positve 
const knowsHTML = false;
const knowsCSS = true;
const canDesigneWebsite =   knowsHTML || knowsCSS;
console.log(canDesigneWebsite);

// in this kind of logic, if any of the variable is negetive it will return false 
const isAdmin = false;
const isSuperUser = false
 
const canAccessPage = isAdmin || isSuperUser;
console.log(canAccessPage)



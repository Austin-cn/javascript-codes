
// control strustre in js is enssential for controlling the flow of
// execution in your code. this allow you to dictate how your program should responed 
// base on condictions.


// 1. condictional statement 
// condictional statement execute a block of code if the specified  condiction is true or false


// a. if statement 
let temperature = 30;

if( temperature > 25) {
    console.log( 'it is a hot day!' ) 
} else {
    console.log('it is a cold day')
}

const lekiGood = true; 
let   ojota = false;

if ( lekiGood || ojota ) {
    console.log( 'them we all move to leki' )
} else {
    console.log('we remain in mainland')
}

const isAdmin = false;
const isSuperUser = false;

if ( isAdmin || isSuperUser) {
    console.log(" you can have access to the app")
} else {
    console.log(" you are not allow to access this app")

}

const isPaidSchoolFee = true;

const hasGoodHealth = false;

if (  isPaidSchoolFee && hasGoodHealth ) {
    console.log('welcome to class')
} else {
    console.log("go back home")
}

const shipping = 50;

if ( shipping < 40 ) {
    console.log( "free shipping" )
} else {
    console.log( "shipping fee is $150" )
}

let yes = true;
let no  = false;

console.log(!no);


let age = 25;

if (age  > 25 ){
    console.log("your age is above ")
} else if (age < 25){
    console.log("your age is below 25")
} else {
    console.log("your age is 25")
}

let age0 = 25;

switch (age0) {
  case age0 > 25:
    console.log("your age is above");
    break;
    case  age0 < 25:
        console.log("your age is below 25");
        break
        default:
            console.log("your age is 25");
}


let fruit = "apple";
if (fruit === "bannana") {
    console.log("we have bannana in the store")
} else if ( fruit === "orange"){
    console.log("we have orange in the store")
}else if ( fruit === "coconut"){
   console.log("coconut is in our store")
} else if (fruit === "apple") {
  console.log("we have apple in our syore")
} else {
    console.log("we do not have any fruit in our store ")
}


let fruit1 = "apple";


switch (fruit1) {
    case "bannana":
      console.log(" it is bannana");
      break;
      case "apple":
      console.log("it is apple");
      break;
      
      default:
        console.log("we do not have bannana");

  } 

  const actions = ["start", "stop", "pause"];
  let userActions = "start";
  let isLoggedin = true;

  switch(true){
      case actions.includes(userActions) && isLoggedin:
        console.log("Actions permitted:" + userActions );
        break;
     case actions.includes(userAction)  && !isLoggedin:
        console.log("please log in to perform ths");
        break;
      default:
        console.log("No valid case found");     
        
  }

  /* In this contest, we are searching for switch (true)the  statement of the first case 
  has already proven to us that the answer to the task is (Actions permitted:start)
  in our console. the three variables are present.  the first variable is const actions = ["start", "stop", "pause"];
  which includes  the second variable  let userActions = "start"; then the third variable is isLoggedin:
  Now by default because of the  concept or principal behind this logic operator && it will return true 
  because three of the condicton are meant or present. 
  
  The second case con't be the answer because of this logic oprator sign ! which mean is not a*/
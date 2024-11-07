
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



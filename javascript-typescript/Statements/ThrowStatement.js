//Throw Statement

//The throw statement is used to create custom errors in JavaScript. It is often used in conjunction with try...catch to handle errors.

function checkAge(age){
    if(age<18)
    throw new Error("Age should be 18 or older");
}

checkAge(2)

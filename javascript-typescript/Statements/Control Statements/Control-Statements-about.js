//Control Statements in JavaScript

//JavaScript control statement is used to control the execution of a program based on a specific condition. If the condition meets then a particular block of action will be executed otherwise it will execute another 
// block of action that satisfies that particular condition.

//There are three types of control statements in JavaScript:
//1. Conditional Statements: These statements are used for decision-making, a decision.
//2. Looping Statements: These statements are used to execute a block of code repeatedly.
//3. Jump Statements: These statements are used to jump to a different part of the code.


//Approach 1: If Statement
//In this approach, we are using an if statement to check a specific condition, the code block gets executed when the given condition is satisfied.

const num = 5;

if (num > 0) {
    console.log("The number is positive.");
};

//Output: The number is positive.

//Approach 2: Using If-Else Statement
// The if-else statement will perform some action for a specific condition. 
// If the condition meets then a particular code of action will be executed otherwise it will execute another code of action that satisfies that particular condition.

num = -10;

if (num > 0)
    console.log("The number is positive.");
else
    console.log("The number is negative");

//Output: The number is negative

//Approach 3: Using Switch Statement

//Selecting from Many Options with Switch Statements:
// If you need to match one value against many options, you can use a switch statement. A switch statement compares the value to the case statements which define various possible values.
//  Any valid JavaScript statements can be executed inside a case block and will run from the first matched case value until a break is encountered.
//In some cases, using the switch case statement is seen to be more convenient than if-else statements.

//Syntax:
// switch (expression) {
//     case value1:
//         statement1;
//         break;
//     case value2:
//         statement2;
//         break;
//     .
//     .
//     case valueN:
//         statementN;
//         break;
//     default:
//         statementDefault;
// }

let number = 2;

switch(number){
    case 0:
        console.log("number is 0");
        break;
    case 1:
        console.log("number is 1");
        break;
    case 2:
        console.log("number is 2");
        break;
    default:
        console.log("number is greater than 2");
}

//Output: number is 2

function caseInSwitch(val){
    let answer = "";
    
    switch(val){
        case 1:
            return "alpha";
            break;
        case 2:
            return "Beta";
            break;
        case 3:
            return "Gamma";
            break;
        case 4:
            return "Delta";
            break;
            
    }
    
    return answer;
}

console.log(caseInSwitch(1))

//Output: alpha

//Multiple Identical Options in Switch Statements:

// If the break statement is omitted from a switch statement's case, the following case statement(s) are executed until a break is encountered. If you have multiple inputs with the same output, you can represent them in a switch statement like this:

let result12 = "";
switch (val) {
  case 1:
  case 2:
  case 3:
    result12 = "1, 2, or 3";
    break;
  case 4:
    result12 = "4 alone";
}

// Cases for 1, 2, and 3 will all produce the same result.

//Approach 4: Using the Ternary Operator (Conditional Operator)

// The conditional operator, also referred to as the ternary operator (?:), is a shortcut for expressing conditional 
// statements in JavaScript.

// Syntax
// condition ? value if true : value if false

let x=10

let result = x>0 ? "postive" : "negative"

console.log(`the number is ${result}`);

//Output: the number is positive

//Approach 5: Using the For Loop
//In this approach, we are using for loop in which the execution of a set of instructions repeatedly until some condition evaluates and becomes false

for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
};

//Output: 0 2 4 6 8 10

//Approach 6: Using the While Loop
//The while loop repeats a block of code as long as a specified condition is true.

let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}

//Output: 1 2 3 4 5

//Approach 7: Using the Do-While Loop
//The do-while loop is similar to the while loop, except that the condition is evaluated after the execution of the loop's body. 
// This means the code block will execute at least once, even if the condition is false.

i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);

//Output: 1 2 3 4 5

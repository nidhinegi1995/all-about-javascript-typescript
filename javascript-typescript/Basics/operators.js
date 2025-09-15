//1. Strict Equality Operator:

//Strict equality (===) is the counterpart to the equality operator (==). 
// However, unlike the equality operator, which attempts to convert both values being compared to a common type, 
// the strict equality operator does not perform a type conversion.

//The == operator performs type coercion, meaning it tries to convert operands to the same type before making the comparison.

//If the operands are of different types, JavaScript will attempt to convert one or both of them to a common type.

// After the conversion, it checks for equality.

// Examples:
'5' == 5;   // true (String '5' is coerced to a Number)
1 == true;  // true (Boolean true is coerced to Number 1)
0 == false; // true (Boolean false is coerced to Number 0)

//The === operator, also known as strict equality, does not perform type coercion.

//It checks both the value and the type of the operands. If they are not of the same type, the result is false.

//Examples:
'5' === 5;  // false (String '5' is not the same type as Number 5)
1 === true; // false (Number 1 is not the same type as Boolean true)
0 === false;// false (Number 0 is not the same type as Boolean false)

//The loose equality (==) can lead to unexpected results due to automatic type conversions, so it's often considered safer to use strict equality (===).

//2. Typeof Operator:

// In JavaScript, you can determine the type of a variable or a value with the typeof operator, as follows:

//Examples:
typeof 42;            // "number"
typeof 'Hello';      // "string"
typeof true;         // "boolean"
typeof undefined;    // "undefined"
typeof {a: 1};      // "object"
typeof [1, 2, 3];   // "object" (arrays are a type of object)
typeof function(){}; // "function"
typeof null;        // "object" (this is a known quirk in JavaScript)
typeof Symbol();   // "symbol"
typeof BigInt(9007199254740991); // "bigint"

//3. Inequality Operator:

//The inequality operator (!=) is used to compare two values to determine if they are not equal.

//Examples:
5 != 3;        // true (5 is not equal to 3)
'hello' != 'world'; // true ('hello' is not equal to 'world')

//4. Strict Inequality Operator:

//The strict inequality operator (!==) is used to compare two values to determine if they are not equal in both value and type.

//Examples:
5 !== '5';     // true (5 is a number and '5' is a string)
3 !== 3;       // false (both are the same number)
'hello' !== 'hello'; // false (both are the same string)

//5. Logical AND Operator:

//The logical AND operator (&&) is used to combine two boolean expressions.

//Examples:

true && true;   // true (both operands are true)
true && false;  // false (one operand is false)

//6. Logical OR Operator:

//The logical OR operator (||) is used to combine two boolean expressions.
//Examples:
true || false;  // true (at least one operand is true)
false || false; // false (both operands are false)


//Interview Questions:

//Write a program to find Even or Odd Number

function evenOrOdd (num){
if (num%2 === 0){
return "Even";
}
else{
return "Odd";
}
}

console.log(evenOrOdd(5)); // Odd
console.log(evenOrOdd(4)); // Even

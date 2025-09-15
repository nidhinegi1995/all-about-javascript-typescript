//1. +: Matches 1 or more occurrences of the preceding character/group.

//Example: a+ matches one or more "a"s.

const regexPlus = /a+/;
console.log(regexPlus.test("a")); // true
console.log(regexPlus.test("aa")); // true
console.log(regexPlus.test("b")); // false

//2. *: Matches 0 or more occurrences of the preceding character/group.
//Example: a* matches zero or more "a"s.

const regexStar = /a*/;
console.log(regexStar.test("")); // true
console.log(regexStar.test("a")); // true
console.log(regexStar.test("aa")); // true
console.log(regexStar.test("b")); // true

//why to use *: Useful when you want to match patterns that may or may not occur, such as optional characters.

//3. JavaScript RegExp ? Quantifier

//The ? quantifier in JavaScript regular expressions specifies that the preceding element is optional. 
// It matches zero or one occurrence of the element, making it a useful tool for flexible pattern matching.

let regexColor = /colou?r/;
let str1 = "color";
let str2 = "colour";
let str3 = "colouur";
console.log(regexColor.test(str1));
console.log(regexColor.test(str2));
console.log(regexColor.test(str3));

//Output:
// true
// true
//  false

//4. JavaScript RegExp {X} Quantifier

//The RegExp m{X} Quantifier in JavaScript is used to find the match of any string that contains a sequence of 
// m, X times where X is a number. 

let strK = "Geekkkksss@_123_$";
let regexK = /k{2}/gi;
let matchK = strK.match(regexK);

console.log(matchK);

//Output:
// [ 'kk', 'kk' ]

//5. JavaScript RegExp {X,Y} Quantifier

// JavaScript RegExp {X,Y} Quantifier in JavaScript is used to find the match of any string that contains a
// sequence of m, X to Y times where X, Y must be numbered.

// Matches between 2 and 4 digits
const regexDigits = /\d{2,4}/;
console.log(regexDigits.test("123"));
console.log(regexDigits.test("12345"));
console.log(regexDigits.test("12"));

//Output:
// true
// true
// true

//6. JavaScript RegExp {X,} Quantifier

//The RegExp m{X, } Quantifier in JavaScript is used to find the match of any string that contains a 
// sequence of m, at least X times, where X is a number.

let str = "GeeksforGeeeks e@_123_$";
let regex = /k{1,}/gi;
let match = str.match(regex);

console.log("Found " + match.length
    + " matches: " + match);

//Output:
// Found 2 matches: k,k
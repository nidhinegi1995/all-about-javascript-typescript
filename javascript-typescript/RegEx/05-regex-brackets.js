//1. JavaScript RegExp [abc] Expression

//The RegExp [abc] Expression in JavaScript is used to search any character between the brackets.
//The character inside the brackets can be a single character or a span of characters.

//[A-Z]: It is used to match any character from uppercase A to Z.
// [a-z]: It is used to match any character from lowercase a to z.
// [A-z]: It is used to match any character from uppercase A to lowercase z.
// [abc...]: It is used to match any character between the brackets.

let str = "computer";

let regex = /[abc]/g

console.log(regex.test(str))

//Output: false

//Searches the characters between [A-G]

let str1 = 'A computer science portal for GEEKS.';

let regex1 = /[A-G]/g

console.log(str1.match(regex1))

//Output:
// [
//   'G', 'E', 'E',
//   'F', 'G', 'E',
//   'E', 'A'
// ]

//match vowels

let regexVowels = /[aeiou]/g;
let strVowels = "Hello World!";

console.log(strVowels.match(regexVowels));
//Output: [ 'e', 'o', 'o' ]

// match consonants
let regexConsonants = /[bcdfghjklmnpqrstvwxyz]/g;
let strConsonants = "Hello World!";
console.log(strConsonants.match(regexConsonants));
//Output: [ 'H', 'l', 'l', 'W', 'r', 'l', 'd' ]

// 2. JavaScript RegExp [^abc] Expression

//The RegExp [^abc] Expression in JavaScript is used to search any character not between the brackets.
//The character inside the brackets can be a single character or a span of characters.

let str2 = "computer";

let regex2 = /[^abc]/g

console.log(regex2.test(str2))

//Output: true

//Searches the characters not between [A-G]

let str3 = 'A computer science portal for GEEKS.';

let regex3 = /[^A-G]/g

console.log(str3.match(regex3))

//Output:
// [
//   ' ', 'c', 'o',
//   'm', 'p', 'u',
//   't', 'e', 'r',
//   ' ', 's', 'c',
//   'i', 'e', 'n',
//   'c', 'e', ' ',
//   'p', 'o', 'r',
//   't', 'a', 'l', 
//   ' ', 'f', 'o',
//   'r', ' ', 'G',
//   'E', 'E', 'K',
//   'S', '.', ' ',
//   ' ', ' ', ' ',
//   ' ', ' ', ' '      
// ]

//3. JavaScript RegExp [0-9] Expression

//The [0-9] expression in JavaScript regular expressions matches any single digit between 0 and 9. 
// It is a character class used to represent a range of numeric characters.

let regex4 = /[0-9]/g;
let str4 = "abc123xyz";
let digitMatches = str4.match(regex4);
console.log(digitMatches);

//Output: [ '1', '2', '3' ]

//4. Ensure the entire string consists only of digits.

let regex5 = /^[0-9]+$/;
let input = "123456";
if (regex5.test(input)) {
    console.log("Valid numeric input.");
} else {
    console.log("Invalid input.");
}

//Output: Valid numeric input.

//Matching Numbers in a Date

let regex6 = /[0-9]{4}/;
// Matches exactly four digits
let str5 = "The year is 2024.";
let match2 = str5.match(regex6);
console.log(match2);

//Output: [ '2024' ]

//Replacing Digits

let regex7 = /[0-9]/g;
let str6 = "Room 101";
let result = str6.replace(regex7, "*");
console.log(result);

//Output: R**m ***1

// 5. JavaScript RegExp [^0-9] Expression

//The [^0-9] expression in JavaScript regular expressions matches any single character that is not a digit (0-9).

let regex8 = /[^0-9]/g;
let str7 = "abc123xyz";
console.log(str7.match(regex8));

//Output: [ 'a', 'b', 'c', 'x', 'y', 'z' ]


//Searching the digits which are not present between [0-4] in the given string. 

let str9 = "123456790";
let regex9 = /[^0-4]/g;
let match9 = str9.match(regex9);

console.log("Found " + match9.length
    + " matches: " + match9);

//Output: Found 4 matches: 5,6,7,9

//Searching the digits which are not present between [0-9] in the given string and replaces the characters with hash(#). 

let str10 = "128@$%";
let replacement = "#";
let regexNonDigit = new RegExp("[^0-9]", "g");
let match = str10.replace(regexNonDigit, replacement);

console.log("Found " + match.length
    + " matches: " + match);

//Output: Found 3 matches: 128###

//6. JavaScript RegExp (x|y) Expression

// The (x|y) expression in JavaScript regular expressions is used to match either x or y. It acts as an OR operator in regular expressions, allowing you to specify multiple patterns to match.

let regexCatDog = /(cat|dog)/g;
let strCatDog = "I have a cat and a dog.";
let matchesCatDog = strCatDog.match(regexCatDog);
console.log(matchesCatDog);

//Output: [ 'cat', 'dog' ]

//7. Matching Single Characters

let regexVowel = /(a|e|i|o|u)/g;
// Matches any vowel
let strVowel2 = "hello world";
let vowelMatches = strVowel2.match(regexVowel);
console.log(vowelMatches);

//Output: [ 'e', 'o', 'o' ]

//8. Using Alternation with Complex Patterns

let regexTitle = /(Mr\.|Mrs\.|Ms\.)\s[A-Z][a-z]+/g;
let strTitle = "Mr. Smith and Mrs. Johnson are here.";
let titleMatches = strTitle.match(regexTitle);
console.log(titleMatches);

//Output: [ 'Mr. Smith', 'Mrs. Johnson' ]


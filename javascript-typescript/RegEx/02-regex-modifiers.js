//Regular Expression Modifiers

//1. JavaScript RegExp g Modifier

//The g (global) modifier in JavaScript regular expressions is used to perform a global search. 
// It ensures the pattern is matched multiple times throughout the entire string, rather than stopping at the first match.

//.match() is a string method in JavaScript that’s used to search for matches against a regular expression. 
//Unlike .test() (which only gives true/false), .match() gives you the actual matched content (or null if nothing matches).

let regex = /cat/g

let string = "cat, catch a cat, catalogue"

let matches = string.match(regex)

console.log(matches)

//Output:
// [ 'cat', 'cat', 'cat', 'cat' ]

//Combination: Can be combined with other flags like i (case-insensitive) and m (multiline).

//Finding All Matches

let str = "dog, Doggy, dOgs are friends"

let regex2 = /dog/gi

let matches2 = str.match(regex2)

console.log(matches2)

//Output:
// [ 'dog', 'Doggy', 'dOgs' ]

//Counting Word Occurrences

let str1 = "apple orange apple banana apple";

let regex1 = /apple/g

let matches1 = (str1.match(regex1) || []).length;

console.log(matches1)

//Output:
// 3

////Replacing All Matches
//all occurrences of "foo" are replaced with "qux".

let str2 = "foo bar foo baz foo";

let regex0 = /foo/g

let result = str2.replace(regex0, "fux")

console.log(result)

//Output:
// "fux bar fux baz fux"

//2. JavaScript RegExp i Modifier

//The i modifier in JavaScript regular expressions stands for case-insensitivity. 
// It allows the regex to match letters in a string regardless of their case, 
// making it ideal for scenarios where matching should not be case-sensitive, 
// such as user input validation or text search.

// Regular expression without 'i' flag
let regex3 = /hello/;
console.log(regex3.test("Hello"));

//Output: false

// Regular expression with 'i' flag
let regex4 = /hello/i;
console.log(regex4.test("Hello"));

//Output: true

//Validating Case-Insensitive Email Domains

let email = "nidhi.negi@Gmail.com"

let regex5 = /@gmail\.com/i

console.log(regex5.test(email))

//Output: true

//3. JavaScript RegExp m Modifier

//The m modifier in JavaScript regular expressions stands for "multiline". 
// It alters the behavior of the ^ (caret) and $ (dollar) anchors, 
// allowing them to match the start or end of any line in a multiline string, 
// rather than just the start or end of the entire string.

//^: Anchors the pattern to the beginning of the string.

//$: Anchors the pattern to the end of the string.

//Matching the Start of Any Line
let regex6 = /^hello/m
let str6 = "world\nhello\nJavaScript";
let match = str6.match(regex6)
console.log(match)

//Output:

// [
//   'hello',
//   index: 6,
//   input: 'world\nhello\nJavaScript',
//   groups: undefined
// ]

//Matching the End of Any Line

let regex7 = /fine$/m
let str7 = "info: everything is fine\nerror: something went wrong";
let match7 = str7.match(regex7)
console.log(match7)

//Output:
// [
//   'fine',
//   index: 20,
//   input: 'info: everything is fine\nerror: something went wrong',
//   groups: undefined
// ]

//Finding All Matches Across Lines

let str8 = "line1\nline2\nline3";
let regex8 = /^\w+/gm;  
let matches8 = str8.match(regex8);
console.log(matches8);

// Output:
// [ 'line1', 'line2', 'line3' ]

//Removing Blank Lines
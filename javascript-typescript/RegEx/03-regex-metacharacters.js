//Regular Expression Metacharacters are characters with a special meaning:

//1. RegExp \D Metacharacter

//The RegExp \D Metacharacter in JavaScript is used to search non-digit characters i.e all the characters except digits.
//Syntax: /\D/ 

let str = "a1234g5g5";
let regex = /\D/g
let match = str.match(regex)

console.log(match)

//Output:
// [ 'a', 'g', 'g' ]

//2. RegExp \d Metacharacter

//The RegExp \d Metacharacter in JavaScript is used to search for digit characters (0-9).
//Syntax: /\d/

let str1 = "a1234g5g5";

let regex1 = /\d/g

let match1 = str1.match(regex1);

console.log(match1.length + " matches found: " + match1)

// 3. JavaScript RegExp \W Metacharacter

//The \W metacharacter in JavaScript regular expressions matches any character that is not a word character.

//A word character is defined as:
// Any alphanumeric character (a-z, A-Z, 0-9)
// The underscore (_)

//Essentially, \W matches anything that is not a letter, digit, or underscore.

//Syntax: /\W/

let str2 = "Hello, World! 123_456";
let regex2 = /\W/g;
let matches2 = str2.match(regex2);
console.log(matches2)

//Output:
// [ ',', ' ', '!', ' ' ]

//Removing Non-Word Characters

let str3 = "Hello, World! 123";
let regex3 = /\W/g;
let result = str3.replace(regex3, "");
console.log(result)

//Output:
// HelloWorld123

// Counting Non-Word Characters

let str4 = "Goodbye, cruel world!";
let regex4 = /\W/g;
let count = (str4.match(regex4) || []).length;
console.log(count)

// Output:
// 4

//Splitting on Non-Word Characters

let str5 = "split,this.string!by?punctuation";
let regex5 = /\W/g;
let parts = str5.split(regex5);
console.log(parts)

// Output
// [ 'split', 'this', 'string', 'by', 'punctuation' ]

//Validating a String for Special Characters
let regex6 = /\W/;
let username = "User_123";
if (regex6.test(username)) {
    console.log("Invalid username. Contains special characters.");
} else {
    console.log("Valid username.");
}

// Output
// Valid username.

//4. RegExp \w Metacharacter

//The \w metacharacter in JavaScript regular expressions matches any word character, which includes:
// Alphanumeric characters (a-z, A-Z, 0-9)
// The underscore (_)
// It does not match spaces or punctuation characters.

//Syntax: /\w/

let str7 = "My name is Nikki_28!";
let regex7 = /\w+/g;  // '+' means match one or more word characters
let matches = str7.match(regex7);
console.log(matches);

//Output:
// [ 'My', 'name', 'is', 'Nikki_28' ]

//5. RegExp \S Metacharacter
//The RegExp \S Metacharacter in JavaScript is used to find the non-whitespace characters. 
//The whitespace character can be a space/tab/new line/vertical character.

//Syntax: /\S/

let str8 = "GeeksforGeeks @ _123_ $";
let regex8 = /\S+/g
let matches8 = str8.match(regex8);
console.log(matches8)

//Output:
// [ 'GeeksforGeeks', '@', '_123_', '$' ]

//JavaScript RegExp \s Metacharacter

//The \s metacharacter in JavaScript regular expressions matches any whitespace character. 
// This includes spaces, tabs, form feeds, line breaks, and other whitespace characters.

// Syntax: /\s/

let str9 = "Hello World";
let str10 = "HelloWorld";
let regex9 = /\s/
console.log(regex9.test(str9))
console.log(regex9.test(str10))

//Output:
// true 
// false

//Splitting by Whitespace

let str11 = "Split this text by spaces, tabs, or line breaks.";

let regex10 = /\s+/

console.log(str11.split(regex10))

//Removing Extra Whitespace

let str12 = "   Remove   extra   spaces   ";

let regex11 = /\s+/g

console.log(str12.trim().replace(regex11, " "))

//Output:
// Remove extra spaces
// The trim() method is used to remove leading and trailing whitespace,

//6. JavaScript RegExp . Metacharacter

//The . metacharacter in JavaScript regular expressions matches any single character except for a newline (\n) 
// or other line terminators, such as \r. It is widely used as a wildcard to represent "any character."

let regex12 = /c.t/;
let str13 = "cat";
let str14 = "cut";
console.log(regex12.test(str13)); 
console.log(regex12.test(str14));

//Output:
// true
// true
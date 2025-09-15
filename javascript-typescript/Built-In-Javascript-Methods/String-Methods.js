//String Methods

//str.length
// Returns the length of the string
let str = "Hello, World!";
console.log(str.length); // Output: 13

//str.toUpperCase()
// Converts all characters in the string to uppercase
console.log(str.toUpperCase()); // Output: "HELLO, WORLD!"

//str.toLowerCase()
// Converts all characters in the string to lowercase
console.log(str.toLowerCase()); // Output: "hello, world!"

//str.includes(searchString, position)
// Checks if the string contains the specified substring    
console.log(str.includes("World")); // Output: true
console.log(str.includes("world")); // Output: false

//str.indexOf(searchValue, fromIndex)
// Returns the index of the first occurrence of the specified value, or -1 if not found
console.log(str.indexOf("World")); // Output: 7
console.log(str.indexOf("world")); // Output: -1

//str.slice(start, end)
// Extracts a section of the string and returns it as a new string
console.log(str.slice(0, 5)); // Output: "Hello"
console.log(str.slice(7, 12)); // Output: "World"

//str.split(separator, limit)
// Splits the string into an array of substrings based on the specified separator
console.log(str.split(", ")); // Output: ["Hello", "World!"]
console.log(str.split("o")); // Output: ["Hell", ", W", rld!"]

//str.trim()
// Removes whitespace from both ends of the string
console.log(str.trim()); // Output: "Hello, World!"

//str.replace(searchValue, newValue)
// Replaces occurrences of a specified value with a new value
console.log(str.replace("World", "Universe")); // Output: "Hello, Universe!"

//str.join()

['a','b','c'].join()     // "a,b,c"   (default separator is comma ,)
['a','b','c'].join('-')  // "a-b-c"
['a','b','c'].join('')   // "abc"


//Interview Questions

//Check if given string is pallindrome

function pallindrome(str){
    let reverse = str.split('').reverse().join('');
    if(reverse==str)
    console.log('Yes');
    else
    console.log('No');
}

pallindrome("missim");

//Output: Yes

////Reverse a given string
let str2

function reverse(str2){
    return str.split('').reverse().join('');
}

console.log(reverse('nidhi'));

//Output: ihdin






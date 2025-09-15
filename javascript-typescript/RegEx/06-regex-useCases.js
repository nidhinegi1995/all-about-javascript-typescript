//Test your regex using tools like regex101 to make sure it matches your desired text.

//1. Validating Email Addresses

let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
console.log(regex.test("user@example.com"));

//Output: true

//o	Explanation:
//^: Start of string.
//[a-zA-Z0-9._%+-]: Matches any letter, digit, or special characters in the local part of the email.
//@: Matches the "@" symbol.
//[a-zA-Z0-9.-]: Matches the domain name.
//\.: Matches a literal dot (.).
//[a-zA-Z]{2,}: Matches the top-level domain (like .com, .org, etc.).
//$: End of string.

//2. Validating Phone Numbers

const phoneRegex = /^\+?[0-9]{2}?[\s]?[0-9]{10}$/;
console.log(phoneRegex.test("+91 1234567890"));
//Output: true

//3. Matching a date (DD/MM/YYYY):

const dateRegex = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/(\d{4})$/;
console.log(dateRegex.test("31/12/2020"));

//Output: true

// Explanation:
// ^(0[1-9]|1[0-9]|2[0-9]|3[01]): Matches valid days from 01 to 31.
// /(0[1-9]|1[0-2]): Matches valid months from 01 to 12.
// /\d{4}$: Matches a 4-digit year.



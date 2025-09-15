//What is a Module in Node.js?

// A module in Node.js is just a reusable block of code (JS file) that can be exported and imported into other files.
// It helps you organize your code into smaller, manageable parts instead of writing everything in one huge file.
//Consider modules to be the same as JavaScript libraries.A set of functions you want to include in your application.

//Built-in Modules

//Node.js has a set of built-in modules which you can use without any further installation.

//Here is a list of the built-in modules of Node.js version 6.10.3:

// assert  -  Provides a set of assertion functions for verifying invariants
// buffer -  A global object that provides a way to work with binary data
// child_process -  Allows you to run child processes
// cluster -  Allows you to create child processes that share the same server port. To split a single Node process into multiple processes
// crypto -  Provides cryptographic functionality that includes a set of wrappers for OpenSSL's hash, HMAC, cipher, decipher, sign, and verify functions
// fs - To handle the file system
// http - To make Node.js act as an HTTP server
// https - To make Node.js act as an HTTPS server.
//path - To handle file paths
//timers - To execute a function after a given number of milliseconds etc.

//How to include a built-in module in your application

//To include a module, use the require() function with the name of the module:

// const fs = require('fs');
// const http = require('http');

//Now your application has access to the HTTP module, and is able to create HTTP servers and make requests.

//Create Your Own Modules

//You can create your own modules, and easily include them in your applications.

//The following example creates a module that returns a date and time object:

// exports.myDateTime = function () {
//   return Date();
// };
// Use the exports keyword to make properties and methods available outside the module file.
// Save the code above in a file called "myfirstmodule.js"

//Include Your Own Module
// Now you can include and use the module in any of your Node.js files.


// var dt = require('./myfirstmodule');
// console.log(dt.myDateTime());

//Notice that we use ./ to locate the module, that means that the module is located in the same folder as the Node.js file.

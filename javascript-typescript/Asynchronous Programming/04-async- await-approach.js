//Async and Await in JavaScript

//async and await are modern JavaScript keywords that help you write asynchronous code in a cleaner,
// more readable way — like it’s synchronous.
//Async and Await in JavaScript are used to simplify handling asynchronous operations using promises. 
//By enabling asynchronous code to appear synchronous, they enhance code readability and make it easier to manage complex asynchronous flows.
//They are used with Promises, but look way neater than .then() chains.
//Async functions always return a promise, and await can only be used inside async functions.

async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();
  console.log(data);
}

fetchData();

//Output:
// {
//   userId: 1,
//   id: 1,
//   title: ....',
//   body: ....}

//Syntax:
async function functionName() {
  try {
    const result = await someAsyncFunction();
    console.log(result);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

//Async Function
// The async function allows us to write promise-based code as if it were synchronous. 
// This ensures that the execution thread is not blocked. Async functions always return a promise.
// If a value is returned that is not a promise, JavaScript automatically wraps it in a resolved promise.

const getData = async () => {
    let data = "Hello World";
    return data;
}

getData().then(data => console.log(data));

//Output: Hello World

//Await Keyword
//The await keyword is used to wait for a promise to resolve. It can only be used within an async block. 
//Await makes the code wait until the promise returns a result, 
//allowing for cleaner and more manageable asynchronous code.

const getData2 = async () => {
    let y = await "Hello World";
    console.log(y);
}

console.log(1);
getData2();
console.log(2);

//Output:
// 1
// 2
// Hello World

// The async keyword transforms a regular JavaScript function into an asynchronous function, 
// causing it to return a Promise.
// The await keyword is used inside an async function to pause its execution and wait for a 
// Promise to resolve before continuing.




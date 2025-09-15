//Approach 2: Using Promises

//Promises are objects representing the eventual completion (or failure) of an asynchronous operation, 
// providing better handling of asynchronous code with .then() and .catch().
//.then() for successful completion
//.catch() for handling errors

//Producer side → the code that creates the promise (uses resolve / reject)
//Consumer side → the code that uses the promise (uses .then() / .catch())
//Promises can be in one of three states: pending, fulfilled, or rejected.

// On the producer side, you must tell JavaScript the outcome:

// resolve(value) → success

// reject(error) → failure

// On the consumer side, you must decide what to do with that outcome:

// .then() → runs if resolved

// .catch() → runs if rejected

//Use it where you need to handle asynchronous operations in a cleaner way than callbacks.

//Syntax:
let examplePromise = new Promise(function(resolve, reject){
     //do something
});

//Promise (with capital P) → a built-in JavaScript class (like Array or Date).
// You create a new instance using the new keyword:

let p = new Promise((resolve, reject) => {
    // async work here
});


//Example: In this example, The function mydata() returns a Promise that resolves with data after a delay. 
// The data is logged, or an error is caught if rejected, after 2 seconds.

let promise = new Promise((resolve, reject) => {
    
    let buildPassed = true;
    
    if(buildPassed){
        resolve("Build successful, QA can test");
    }
    else{
        reject("Build failed, QA blocked");
    }
    
});

promise
.then(result=> console.log(result))
.catch(error=> console.log(error));
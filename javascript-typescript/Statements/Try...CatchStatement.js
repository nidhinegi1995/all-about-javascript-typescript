//Try...Catch Statement

//The try...catch statement is used to handle exceptions in JavaScript. 
// The code inside the try block is executed, and if an error occurs, the code inside the catch block will handle the error.

//the whole point of try...catch 👉 execution continues instead of stopping.

// Without try...catch:

// Error happens → program crashes → nothing after the error runs.

// With try...catch:

// Error happens → caught in catch → you decide what to do (log it, retry, fallback, etc.) → program keeps running after the try...catch.

try{
    let result = someUndefinedFunction();// This will throw an error
    console.log(result);
}catch(error){
    console.error("An error occurred: ", error.message)
}
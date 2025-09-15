//Approach 1: Using callback

//Callbacks are functions passed as arguments to be executed after an asynchronous operation completes. 
// They are used in asynchronous JavaScript to handle responses and ensure non-blocking execution.

//Syntax:

function myFunction(param1, param2, callback) {
    // Do some work...
    // Call the callback function
    callback(result);
}

//Example:

function fetchData(callback) {
    setTimeout(() => {
        const data = "Data fetched";
        callback(data); // Call the callback with the fetched data
    }, 2000);
}   

fetchData((data) => {
    console.log(data); // Output: Data fetched after 2 seconds
});

//In this example, `fetchData` simulates an asynchronous operation using `setTimeout`.
// The callback function is executed once the data is fetched, allowing us to handle the result without blocking the main thread.

//Without callbacks, the code would block execution until the data is fetched, preventing any other operations from running in the meantime.

//example of this without callback:
function fetchDataWithoutCallback() {
    setTimeout(() => {
        const data = "Data fetched";
        console.log(data); // Output: Data fetched after 2 seconds
    }, 2000);
}

fetchDataWithoutCallback(); // This will log the data after 2 seconds, but no further operations can be performed until then.

//Problem: Callback Hell

//When multiple async steps depend on each other:

doTask1(function(result1) {
  doTask2(result1, function(result2) {
    doTask3(result2, function(result3) {
      console.log("Final result: " + result3);
    });
  });
});


//This pyramid-shaped code is called callback hell — hard to read, debug, and maintain.
// That’s why Promises and later async/await were introduced.
//What is Node.js?

//JavaScript originally ran only in browsers (like Chrome, Firefox).
// Example: you click a button → some JS code runs in the webpage.

// But people thought: “Why not run JavaScript outside the browser too? Like for servers or desktop apps?”

// That’s where Node.js comes in.
// 👉 It’s a runtime environment (kind of like a playground/engine) that lets you run JavaScript outside the browser.
// It's open-source, which means anyone can use it and contribute to it.
// It's a server-side platform, meaning it can handle requests and responses, making it suitable for building web applications.

//How does it work?

// Node.js is built on Chrome’s V8 engine (the same engine Chrome uses to run JS fast).

// It adds extra features that browsers don’t have, like:

// Reading/writing files (📂 fs module)

// Creating servers (🌐 http module)

// Handling databases, APIs, etc.

//Why do developers love Node.js?

// Same language everywhere → You can use JS for frontend and backend.

// Fast & lightweight → Handles many requests at the same time (good for scalable apps).

// Huge ecosystem → Millions of packages (via npm, Node Package Manager).

//👉 So, in simple words:
// Node.js = a way to run JavaScript outside the browser, often used to build servers and backend apps.

//Node.js uses asynchronous programming!

// A common task for a web server can be to open a file on the server and return the content to the client.
// Here is how PHP or ASP handles a file request:
// 1.	Sends the task to the computer's file system.
// 2.	Waits while the file system opens and reads the file.
// 3.	Returns the content to the client.
// 4.	Ready to handle the next request.
// Here is how Node.js handles a file request:
// 1.	Sends the task to the computer's file system.
// 2.	Ready to handle the next request.
// 3.	When the file system has opened and read the file, the server returns the content to the client.
// Node.js eliminates the waiting, and simply continues with the next request.
// Node.js runs single-threaded, non-blocking, asynchronous programming, which is very memory efficient.

// What Can Node.js Do?
// •	Node.js can generate dynamic page content
// •	Node.js can create, open, read, write, delete, and close files on the server
// •	Node.js can collect form data
// •	Node.js can add, delete, modify data in your database

// What is a Node.js File?
// •	Node.js files contain tasks that will be executed on certain events
// •	A typical event is someone trying to access a port on the server
// •	Node.js files must be initiated on the server before having any effect
// •	Node.js files have extension ".js"



//Once you have downloaded and installed Node.js on your computer, let's try to display "Hello World" in a web browser.

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);

//The code tells the computer to write "Hello World!" if anyone (e.g. a web browser) tries to access your computer on port 8080.

//Save the file on your computer: C:\Users\Your Name\myfirst.js

//Open commandline >> C:\Users\Your Name>node myfirst.js

//Now, your computer works as a server!
// If anyone tries to access your computer on port 8080, they will get a "Hello World!" message in return!
//Start your internet browser, and type in the address: http://localhost:8080

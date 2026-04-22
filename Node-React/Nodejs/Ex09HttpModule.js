//HTTPModule is the Nodejs module for developing web centric programs. It has APIs for creating Web servers and handle HTTP requests and responses for the application. U dont need heavy servers like Apache or Nginx to run the web applications. U can create a web server using HTTP module and run the web application on that server. It is a lightweight module that can handle a large number of concurrent connections with high performance. It is widely used for developing RESTful APIs, real-time applications, and microservices.

import http from 'http';

function processRequest(req, res){
    
    switch(req.url){
        case "/":
            res.end("Welcome to the Home page!");
            break;
        case "/about":
            res.end("This is the about page!");
            break;
        case "/contact":
            res.end("This is the contact page!");
            break;
        default:
            res.end("Page not found!");
    }
}
//createServer is a API for creating web server in Nodejs. It has a callback function that takes request and response objects as parameters. 
http.createServer((req, res) => {
    console.log("Request received from the client");
    console.log("Request URL: ", req.url);
    //res.end("Hello, this is a response from the server!");//end() method is used to send the response to the client. It takes a string as parameter that is sent as response to the client. After sending the response, it will end the connection with the client.
    processRequest(req, res);
}).listen(3000, () => {
    console.log("Server is running on port 3000");
})
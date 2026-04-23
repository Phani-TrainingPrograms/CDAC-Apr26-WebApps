import express from 'express';
const app = express();//create the application.

//middleware in EXPRESS is a function that has access to the request and response objects and can add features like logging, authentication, and error handling to the application.
app.use(express.json());//This middleware is used to parse the body of the request and make it available as req.body in the route handlers. It is necessary to use this middleware if we want to handle POST requests and access the data sent in the body of the request.
app.use(express.urlencoded({ extended: true }));//This middleware is used to parse the URL-encoded data sent in the body of the request and make it available as req.body in the route handlers. It is necessary to use this middleware if we want to handle POST requests and access the data sent in the body of the request as URL-encoded data.

//When UR website recieves a get method from HTTP, it will execute the callback function and send the response to the client.
app.get('/',(req,res)=> res.send("<h1>Welcome to Express</h1>"));
app.get('/Home',(req,res)=> res.send("<h1>Welcome to HOME page</h1>"));
app.get('/Customers',(req,res)=> res.send("<h1>Welcome to CUSTOMERS page</h1>"));
app.get('/Products',(req,res)=> res.send("<h1>Welcome to PRODUCTS page</h1>"));
app.get('/Registration', (req, res) => res.sendFile("/pages/Registration.html", { root: "." }));
//In ES6, we can refer the root directory by placing an attribute called root in the options object and assigning it a value of ".". This allows us to specify the path to the file we want to send relative to the root directory of our project.
app.get('/submit',(req,res)=>{
    const { name, address, salary } = req.query;//expand the object into variables
    res.send(`<h1>Welcome ${name}, your address is ${address} and salary is ${salary}</h1>`);
});//With get, User can see the data as Querystring and security is compromised. 

//inputs of the form shall be available as body of the request. 
app.post('/submit',(req,res)=>{
    console.log(req.body);//undefined if U dont any middleware to parse the body of the request.
    const { name, address, salary } = req.body;//expand the object into variables
    res.send(`<h1>Welcome ${name}, your address is ${address} and salary is ${salary}</h1>`);
})

//listen launches the application and waits for requests on the specified port. 
app.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000");
});

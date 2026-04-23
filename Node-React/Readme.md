# Nodejs and React Training for CDAC
- PHANI RAJ B.N.

## About Nodejs
1. Nodejs os a JS platform to develop JS based apps out of browser. With this, it removes the limitations of Client side scripting and opens the scope of developing apps that perform IO operations including File, Database, User interactions and many more. 
2. Developed by Ryan Dhyl for Joyent technologies where it uses Chrome's V8 Engine(JS) which allows to execute the JS code in the terminal. 
3. U need to install NODEJS in your platform and can use the terminal to perform JS operations. 

## Features of NODEJS
1. It is a single threaded Environment that performs operations asynchronously.
2. Async functions are handling using thread pool of the JS Engine.
3. It is light weight platform for all the operations that U do on a typical web server. This makes Nodejs popular among the developer community for creating adhoc Servers. Most of the IoT apps use Nodejs as their server environment because of their limited space.  
4. There shall be no blocking threads in Nodejs. So no UI based functions of JS that blocks the thread shall be allowed. prompt, confirm and alert functions are not allowed in Nodejs. 

## Installation of Nodejs
1. Nodejs is freeware available in the link: https://nodejs.org/en/download
2. U can download the LTS(Long Term support) version for better community usage.

## Node Modules
1. Functions, classes and variables that can be used across the application can be defined as module.exports and consumed using require method.
2. Modules can be exported as Commonjs or ES6 Modules. Recommended to use ES6 modules. 
3. U should have package.json file that shall mention the module type you are creating. Refer the package.json file.
4. package.json is a settings file that is common in Nodejs applications. They are the first part of the Application that is refered before your program begins. 
5. Nodejs provides a set of built in modules that can be used to develop rich internet based applications.
6. fs, os, http, events are some of the popular modules for developing nodejs applications. 
7. U can also use 3rd party modules available under NPM (Node Package Manager), a central repository for all Nodejs modules that can be used in your applications. They are open source and free licenced. 

### Http Modules
- HTTP Module in Nodejs is a built in module that allows developers to create Web servers without installing any external libraries.
- HTTP module gives developers complete control over how requests are handled, what headers need to be sent, and how responses are structured. 
- HTTP allows to create server using API createServer that listens to a specific port. Whenever a request arrives, Nodejs triggers a callback function, passing request and response objects that allow you to read incoming data and send outgoing responses. 

### Diagram Flow
User --> Browser  --> Node Http server --> Request handler function --> Response Sent to Client. 
Analogy: Bank Token system:
- Customer submits request(Browser)
- Token Counter recieves it.(Http Server)
- Staff processes request.(Handler)
- Staff responses appropriately.(Response)


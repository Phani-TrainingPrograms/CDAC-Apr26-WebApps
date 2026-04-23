//In an Synchronous programming, code executes line by line. If any of the execution is taking longer time, the entire app freezes. 
//Asynchronous programming allows Nodejs to initiate a task and move on to the next line before the first line finishes.

/*Anatomy of Async Programming: 
1. Non Blocking I/O: Nodejs does not wait for any task to complete. No IO operations are conducted by the Nodejs environmentg. There will be a single worker thread to handle all kinds of requests and concurrent connections to the server. It does not get struct anywhere on this single server thread. 
2. The callback pattern: A callback function is a function that is passed as argument to another function. This function shall be invoked later after meeting certain conditions within the function. it could be used to handle both success and failure of the function. Most of the functions shall be void functions and the callback functions shall be invoked by the function and pass the result values or the error information to the callback function. 
3. Error first callback: Nodejs uses a convention of error first callback. If the callback function has any args, the first arg will always be the error information, rest of the arguements would be the data that U want to send to the caller on success.
*/
import fs from 'fs'
import { cwd } from 'process'
import { setTimeout } from 'timers/promises'

fs.readFile('./data/config.json', 'utf-8', (err, data)=>{
    if(err){
        console.error('Failed to read the Configuration file', err);
        return;
    }
    console.log("Configuration read by the app", data)
})
//Issues with callback functions: Callback hell is a deeply nested code that is hard to read and maintain. To resolve this, JS gives U promise objects and async/await keywords. 
////////////////////Promises, Async and Await//////////////////////
/*
Promises: Its an object representing the eventual completion of a task, acts like placeholder for the future value that obtains after the completion of the task. It has methods called then() and catch(). then method shall be invoked on success and catch method on failure.
Promises provide more readability and continuty chain where every then method or catch method returns another Promise object to continue.
Any promise object has 3 states: 
    Pending: Initial State, where the action is yet to start. (Eg: U have placed order at a cafe and coffee is yet to be prepared)
    Fullfilled: Operation completed successfully(Eg: U recieve your ordered Coffee)
    Rejected: Operation has failed(Eg: Cafe ran out of Gas)
*/
//This function creates a Promise object that provides a state that can be used later for success or failure. 
const processPayment = (amount)=>{
    return new Promise((resolve, reject)=>{
        console.log(`Transaction of Rs.${amount} has started`);
        //It shall delay a 3 sec for simulating back transaction...
        setTimeout(()=>{
             const isBankingServerOn = false;
             if(isBankingServerOn){
                resolve({transactionId : "TXN234423", status : "success"})
             }else{
                reject("Server is down for the Banking services")
             }
        }, 3000)
    })
}

processPayment(5000)
    .then(data => console.log(data))
    .catch(err =>console.error(err))
    .finally(()=> console.log("Transaction attempt is completed"))//called on all conditions. 

/*
Promise object syntax encapsulates the callback hell scenario. It wraps the code into resolve and reject. U can chain multiple then() to perform sequential steps. U can have central point for all the errors instead of multiple error objects. Expect to have one catch for all the then chains that U call 
*/
///////////////////////////async and await for more simplification//////////////////
/*
async and await were introduced ES8 where the asynchronous functions become structured and readable. Its extension of Promise usage in your functions. 
async keyword declares a function that implicitly returns a Promise object. This syntactical sugar makes UR code more readable and behave like a normal Synchronous function. 
await is an expression/statement that pauses the execution of the function until the promise is settled. With this, U dont need an explicit then function. await could be placed only in async functions. await can be used on functions that return promise.   
*/
async function getStockReport(trader){
    try {//resolve part of Promise
        const stockA = await fetchPrice('L&T')
        const stockB = await fetchPrice('ONGC')
        const stockC = await fetchPrice('Honeywell')
        console.log(`${stockA}, ${stockB}, ${stockC}`)
        console.log(`Hello ${trader}, \n your portfolio total is ${stockA  + stockB + stockC}`)
    } catch (error) {//reject part
        console.error("Market data is unavailable currently", error)
    }
}

function fetchPrice(stock){
    return new Promise((r, e)=>{
        setTimeout(()=>{
            if(stock == 'L&T')
                r(4567);
            else if(stock == 'ONGC')
                r(2123);
            else if(stock == 'Honeywell')
                r(1200)
            else
                e("Invalid stock, not available")           
        },3000)
    })
}

//Without using Promise object as async implicitly returns promise. 
// async function fetchPrice(stock){
//     const price = 0.0
//     await setTimeout(3000);
//     if (stock == 'L&T')
//         price = 4567;
//     else if (stock == 'ONGC')
//         price = 2123;
//     else if (stock == 'Honeywell')
//         price = 1200
//     return price
// }
getStockReport("Phaniraj")
/////////////////When to use what////////////////////
/*
ES5 -> Callback functions
ES6 -> Promises
ES8+  ->async and await. 
*/
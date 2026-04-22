console.log("Hello world")
const addedValue = 123+ 23      
console.log(`The added value is ${addedValue}`);

//functions in Js 
const addedFunc = (a,b) => a + b
const subFunc = (a,b) => a - b
const mulFunc = (a,b) => a * b
const divFunc = (a,b) => a / b

//executing the functions from the console. 
console.log(`The added value of 12 and 13 is ${addedFunc(12,13)}`)
console.log(`The subtracted value of 12 and 13 is ${subFunc(12,13)}`)
console.log(`The multiplied value of 12 and 13 is ${mulFunc(12,13)}`)
console.log(`The divided value of 12 and 13 is ${divFunc(12,13)}`)

///////////////////Using arrays in JS/////////////////////////
const fruits = ["apple", "banana", "orange", "grape"]
for(const key in fruits){
    console.log(`The fruit at index ${key} is ${fruits[key]}`)
}
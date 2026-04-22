//fs is a builtin Nodejs module that provides APIs for working with file systems. It allows to write, read and append files in both synchronous and asynchronous manner. It allows to create directories and other file related operations. 
import fs from 'fs';//Importing the fs module using import statement. If we are using import statement, then the file extension should be .mjs or the package.json file should have "type": "module" property. Otherwise, it will throw an error.
import { Customer } from './Ex05ES6Module.js'; //using the customer class

import { cwd } from 'process';
const content = "This is a test file created using fs module in Node.js!";//Content to be written in the file.

//fs.writeFileSync("sampletest.txt", content);//writeFileSync() method is used to write the content in the file. It takes two parameters, first is the file name and second is the content to be written in the file. If the file does not exist, it will create a new file and write the content in it. If the file already exists, it will overwrite the existing content with the new content.
//console.log("Content written to the file");

//U can write the content to the file using asynchronous method called writeFile. 
//3 args: filename, content, callback function that handles exceptions. callback function takes an error object as parameter and will be called after the content is written to the file. If there is an error while writing to the file, then the error contains the reason of the error. However, this function will be executed after the content is written to the file.
// fs.writeFile("sampletest.txt", content, (err) => {
//     if(err){//If no error is occured, then it will be null
//         console.error("Error occurred while writing to the file:", err);
//     } else {
//         console.log("Main program has completed the operations");
//         console.log("Content written to the file asynchronously");  
//     }   
// });

/////////////////////////////Example to append content to the file using fs module////////////////////////////
//append to the file. 
// fs.appendFile("sampletest.txt", "\nThis is an appended content to the file.", (err) => {
//     if(err){
//         console.error("Error occurred while appending to the file:", err);
//     } else {
//         console.log("Content appended to the file asynchronously");
//     }
// });

// const cst = new Customer(1, "Phaniraj", "Bangalore");
// fs.appendFile("sampletest.txt", `\nCustomer details: id=${cst.id}, name=${cst.name}, address=${cst.address}`, (err) => {
//     if(!err){
//         console.log("Customer information is stored to the file");
//     }
// });

//todo: create an application that stores the customer details in a CSV file and reads the contents from the csv file. 

//////////////////////////////////////////Reading the contents from the file using fs module//////
const contents = fs.readFileSync("sampletest.txt", "utf-8");//readFileSync() method is used to read the content from the file. It takes two parameters, first is the file name and second is the encoding format. It returns the content of the file as a string. If the file does not exist, it will throw an error.
console.log("Content read from the file: ", contents);

//async version of it....
fs.readFile("sampletest.txt", "utf-8", (err, data)=>{//utf-8 is encoding format, content is plain english. 
    if(err){
        console.error("Error occurred while reading the file:", err);
    } else {
        console.log("Content read from the file: ", data);
    }
})//data contains the contents of the file after the reading operation is completed. 



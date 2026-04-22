import { greet, Customer } from './Ex05ES6Module.js';//Importing the module created in Ex03Modules.js file. We are storing the imported module in a variable called components.
//If a module has to be imported using import statement, then the file extension should be .mjs or the package.json file should have "type": "module" property. Otherwise, it will throw an error.
console.log(greet("Phaniraj"));
const cst = new Customer(1, "Phaniraj", "Bangalore");
console.log(`${cst.name} is a customer with id ${cst.id} and address ${cst.address}`);
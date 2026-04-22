// const external = require('./Ex03Modules');//We are referring the Ex03Modules.js file using require() method and storing the exported function in a variable called external.
// console.log(external);//This will print the function definition of the exported function from Ex03Modules.js file.

// external();//This will execute the exported function from Ex03Modules.js file and print "This is a test function" in the console.

//////////////////////Try this as 2nd Example////////////////////////
const shoppingcart = require('./Ex03Modules');//We are referring the Ex03Modules.js file using require() method and storing the exported object in a variable called shoppingcart.

shoppingcart.addToCart({name:"Apple", price: 100});//This will add an item to the cart using the addToCart function from Ex03Modules.js file.

shoppingcart.addToCart({name:"Banana", price: 50});//This will add another item to the cart using the addToCart function from Ex03Modules.js file.

const bill = shoppingcart.billAmount();//This will calculate the total bill amount using the billAmount function from Ex03Modules.js file and store it in a variable called bill.

console.log(`The total bill amount is ${bill}`);//This will print the total bill amount in the console.

const items = shoppingcart.getAll();//This will get all the items in the cart using the getAll function from Ex03Modules.js file and store it in a variable called items.
console.log("The items in the cart are: ", items);//This will print a message in the console.
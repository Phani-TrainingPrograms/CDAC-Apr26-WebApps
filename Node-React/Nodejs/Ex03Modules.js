//Modules in Nodejs are reusable blocks of code that can be refered inside other Nodejs applications. Modules can organize the code into smaller components and consumed by the application. 
//Every module U create shall be exported using module.exports and imported using require() method.
// module.exports = function (){
//     console.log("This is a test function");
// }
//IFFI (Immediately Invoked Function Expression) is a function that is executed immediately after it is defined. It is a design pattern in JavaScript that allows you to create a private scope for your code and avoid polluting the global namespace.
module.exports = (function (){
    const cart = [];//Create a blank array

    function addToCart(item){
        cart.push(item);
    }

    function billAmount(){
        let bill =0.0;
        for(const item of cart){
            bill += item.price;
        }
        return bill;
    }

    function getAll(){
        return cart;
    }
    return{
        addToCart,
        billAmount,
        getAll
    }

})();
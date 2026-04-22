//ES6 Modules in Node.js allow you to organize your code into reusable modules. You can export functions, objects, or classes from a module and import them in other modules using the import statement. This helps in keeping your code clean and maintainable.
export function greet(name){
    console.log(`Hello ${name}, welcome to ES6 Modules in Node.js!`);
}

export class Customer{
    
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
}
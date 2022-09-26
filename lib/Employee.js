const Answers = require("../index")

class Employee{
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        Answers.name = this.name
        console.log(`Name: ${this.name}`);
    };
    
    getId() {
        Answers.id = 
        console.log(`ID: ${this.id}`);
    };
    
    getEmail() {
        console.log(`Email: ${this.email}`)
    };

    getRole() {
        console.log()
    }
}


const employee = new Employee();

employee. getRole();

module.exports = Employee;
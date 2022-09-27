// const Answers = require("../index")

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
        Answers.id = this.id
        console.log(`ID: ${this.id}`);
    };
    
    getEmail() {
        Answers.email = this.email 
        console.log(`Email: ${this.email}`)
    };

    getRole() {
        return employee
    }
}


 const employee = new Employee();

 employee. getRole();

module.exports = Employee;
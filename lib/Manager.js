const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
       super(name, id, email);
       this.officeNum = officeNum;
    }

    getOfficenum() {
        Answers.officeNum = this.officeNum


        console.log(this.officeNum);
    }

    getRole() {
        return "Manager"
        
}}
const manager = new Manager();

manager.getRole();

module.exports = Manager;
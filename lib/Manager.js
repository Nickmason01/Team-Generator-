const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
       super(name, id, email);
       this.officeNum = officeNum;
    }

    getOfficenum() {
        console.log(this.officeNum);
    }

    getRole() {
        console.log(``)
    }
}

const manager = new Manager();

// Manager.getRole();

module.exports = Manager;
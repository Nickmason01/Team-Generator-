const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
       this.school = school
    }

    getGithub() {
        Answers.school= this.school
    }

    getRole() {
        return "Intern"
    }
}

const intern = new Intern();

intern.getRole ();

module.exports = Intern
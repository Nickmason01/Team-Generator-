const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
       this.gitHub = gitHub
    }

    getGitHub() {
        Answers.gitHub = this.gitHub
    }

    getRole () {
        return "Engineer"
    }

    
}

const engineer = new Engineer();

engineer.getRole(); 

module.exports = Engineer
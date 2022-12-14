const inquirer = require('inquirer')
const fs = require("fs")
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const generateHTML = require("./src/generateHTML")

const newTeam =[]

const managerQuest= [
  {
    type: 'input',
    message: 'What is the team members name?',
    name: 'name',
  },
  {
    type: 'input',
    message: 'What is their employee ID?',
    name: 'id',
  },
  {
      type :'input',
      message: 'What is their email address?',
      name:'email',
  },
  {
    type:"input",
    message:"What is their office #?",
    name: "officeNum"
  }
 
]



const engineerQuest =[
  {
    type: 'input',
    message: 'What is the team members name?',
    name: 'name',
  },
  {
    type: 'input',
    message: 'What is their employee ID?',
    name: 'id',
  },
  {
      type :'input',
      message: 'What is their email address?',
      name:'email',
  },
  {
          type:"input",
          message: "What is their github?",
          name:"gitHub"
  }

]

const internQuest = [
  {
    type: 'input',
    message: 'What is the team members name?',
    name: 'name',
  },
  {
    type: 'input',
    message: 'What is their employee ID?',
    name: 'id',
  },
  {
      type :'input',
      message: 'What is their email address?',
      name:'email',
  },
  {
  
        type: "input",
        message: "What school did they go to?",
        name:"school"
  }

]


 function addManager() {
  inquirer.prompt(managerQuest).then(response => {
    const manager = new Manager(response.name, response.id, response.email, response.officeNum)
     newTeam.push(manager);
   nextEmployee();

  })
}

function addEngineer() {
  inquirer.prompt(engineerQuest).then(response => {
    const engineer = new Engineer(response.name, response.id, response.email, response.gitHub)
    newTeam.push(engineer);
console.log(engineer)
    nextEmployee();

  })
}

function addIntern() {
  inquirer.prompt(internQuest).then(response => {
    const intern = new Intern(response.name, response.id, response.email, response.school)
    newTeam.push(intern);
    nextEmployee();

  })
}
function nextEmployee() {
  inquirer.prompt({
    type :'list',
    message: 'Add a new team member?',
    choices: ["Engineer", "Intern", "Finished building my team"],
    name: "nextEmployee"

  })
  .then (response => {
    if(response.nextEmployee === "Engineer") {
      addEngineer();
    }else if (response.nextEmployee === "Intern") {
      addIntern();
    }else {
      stop();
    }

  })
}



function stop () {
  fs.writeFile("dist/index.html", generateHTML(newTeam) , err => {
    if (err) {
      console.error(err);
    }})
 }


function init() {
  addManager();
}

init()

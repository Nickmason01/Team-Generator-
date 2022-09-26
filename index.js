const inquirer = require('inquirer')

inquirer
 .prompt([
    {
        type: 'confirm',
        message: 'Create a new team?',
        name: 'new-team',
      },
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
        type :'list',
        message: 'Add a new team member?',
        choices: ["Engineer", "Intern", "Manager","Finished building my team"],
        name:'teamMember'
       
      },
      
])
.then((response) => {
  if(`${response.teamMember}` === "Engineer") {
    inquirer
    .prompt([
      {
        type:"input",
        message: "What is their github?",
        name:"gitHub"
      }
    ])
  }else if(`${response.teamMember}` === "Intern") {
    inquirer
    .prompt([
      {
        type: "input",
        message: "What school did they go to?",
        name:"school"
      }
    ])
  }else if (`${response.teamMember}` === "Manager") {
    inquirer
    .prompt([
      {
        type:"input",
        message: "What is their office #?",
        name: "officeNumber"
      }
    ])
  }else{
    return
  }
  console.log(response)
})
// if(`${data.new-team-member}` === "Engineer") {
//   inquirer
//   .prompt([
//     {
//       type:"input",
//       message: "What is their github?",
//       name:"github"
//     }
//   ])
// }else if(`${data.new-team-member}` === "Intern") {
//   inquirer
//   .prompt([
//     {
//       type: "input",
//       message: "What school did they go to?",
//       name:"school"
//     }
//   ])
// }else if (`${data.new-team-member}` === "Manager") {
//   inquirer
//   .prompt([
//     {
//       type:"input",
//       message: "What is their office #?",
//       name: "officenumber"
//     }
//   ])
// }else{
//   return
// }
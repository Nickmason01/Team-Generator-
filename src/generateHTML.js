
function generateHTML(data){
  console.log(data)
   const generateManager = managerArray => {
      console.log(managerArray)
      `
      <div class="card-group d-flex flex-row bd-highlight mb-3">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Manager</h5>
              <p class="card-text"><☕</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${managerArray.name}</li>
              <li class="list-group-item">${managerArray.id}</li>
              <li class="list-group-item">${managerArray.email}</li>
              <li class="list-group-item">${managerArray.officeNum}</li>
            </ul>
        </div> `
      }
       const generateEngineer = engineerArray => {
          `<div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">Engineer</h5>
                  <p class="card-text">👓</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">${engineerArray.name}</li>
                  <li class="list-group-item">${engineerArray.id}</li>
                  <li class="list-group-item">${engineerArray.email}</li>
                  <li class="list-group-item">${engineerArray.github}</li>
                </ul>
            </div>`
          }
            const generateIntern = internArray => {
             ` <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">Intern</h5>
                  <p class="card-text"><📋</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">${internArray.name}</li>
                  <li class="list-group-item">${internArray.id}</li>
                  <li class="list-group-item">${internArray.email}</li>
                  <li class="list-group-item">${internArray.school}</li>
                </ul>
            </div> `
          }
        
        
        const html = [];

        html.push(data.filter(employee => employee.getRole() ==="Manager")
        .map(managerArray => generateManager(managerArray))).join("")

        html.push(data.filter(employee => employee.getRole() ==="Engineer")
        .map(engineerArray => generateEngineer(engineerArray))).join("")

        html.push(data.filter(employee => employee.getRole() ==="Intern")
        .map(internArray => generateIntern(internArray))).join("")
          return html.join("")
}
            
        

module.exports = (data) =>{
  return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>team-generator</title>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
      </head>
      <body>
          <div class="jumbotron">
              <h1 class="display-4 text-center">My Team</h1>
              <hr class="my-4">
         ${generateHTML(data)}
          </div>
          </body>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
        </html>`
};

module.exports = generateHTML
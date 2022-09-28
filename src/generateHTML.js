
function generateHTML(data){
  newteamCards = " "
  for(let i= 0; i < data.length; i++)
  if(data[i].getRole() === "Manager"){
    newteamCards +=
   ` <div class="card-group d-flex flex-row bd-highlight mb-3">
    <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Manager</h5>
          <p class="card-text"><☕</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${data[i].getRole()}</li>
          <li class="list-group-item">${data[i].getName()}</li>
          <li class="list-group-item">${data[i].getId()}</li>
          <li class="list-group-item">${data[i].getEmail()}</li>
          <li class="list-group-item">${data[i].getofficeNum()}</li>
        </ul>
    </div> `
  }else if (data[i].getRole() === "Engineer"){
    newteamCards += 
    `<div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">Engineer</h5>
                  <p class="card-text">👓</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">${data[i].getRole()}</li>
                  <li class="list-group-item">${data[i].getName()}</li>
                  <li class="list-group-item">${data[i].getId()}</li>
                  <li class="list-group-item">${data[i].getEmail()}</li>
                  <li class="list-group-item">${data[i].getGitHub()}</li>
                </ul>
            </div>`
  }else if (data[i].getRole() === "Intern"){
    newteamCards += 
    ` <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Intern</h5>
      <p class="card-text"><📋</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${data[i].getRole()}</li>
      <li class="list-group-item">${data[i].getName()}</li>
      <li class="list-group-item">${data[i].getId()}</li>
      <li class="list-group-item">${data[i].getEmail()}</li>
      <li class="list-group-item">${data[i].getSchool()}</li>
    </ul>
</div> `
  } 
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
          ${newteamCards}
        </div>
      </body>
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
    </html>`

  }

  

module.exports = generateHTML
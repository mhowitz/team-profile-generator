function generatePage(teamData) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Team Members</title>
</head>
<body>
    <header class = "d-flex justify-content-center bg-success p-5">
        <h1 class = "text-light">Team Members</h1>
    </header>
    <section class = "d-flex justify-content-center col col-4 p-3 m-3">
    ${card(teamData)}
    </section>
</body>
</html>
    `

}



function card(data) {
    var empty = '';

    for (var i = 0; i < data.length; i++) {
        empty += 
        ` <div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
        <div class="card-header text-center">${data[i].getName()}</div>
        <div class="card-body text-center">
          <h5 class="card-title">${data[i].getRole()}</h5>
          <ul class="card-text">
          <li>Employee Id: ${data[i].getId()}</li>
          <li>Email: ${data[i].getEmail()}</li>
          <li>${data[i].extraInfo}</li>
          </ul>
          
        </div>
      </div>`
    }
    return empty;

}

module.exports = generatePage;
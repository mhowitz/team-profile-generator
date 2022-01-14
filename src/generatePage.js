function generatePage(teamData) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">
    <title>Team Members</title>
</head>
<body>
    <header class = "d-flex justify-content-center bg-success p-5">
        <h1 class = "text-light">Team Members</h1>
    </header>
    <section class = "d-flex justify-content-center p-3 m-3 gap-5">
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
        ` <div class="card text-dark bg-light mb-3" style="width: 18rem;">
        <div class="card-header bg-info">
        <h2>${data[i].getName()}</h2>
        <h6 class="card-title">${data[i].getRole()}  ${getIcon(data[i])}</h6></div>
        <div class="card-body text-center p-2">
          <p>ID: ${data[i].getId()}</p>
          <p>Email: <a href = 'mailto: ${data[i].getEmail()}'>${data[i].getEmail()}</a></p>
          ${getEmployeeInfo(data[i])}
        </div>
      </div>`
    }
    console.log(empty);
    return empty;

}

function getEmployeeInfo(data) {
    if(data.getRole() === "Manager") {
        return `<p>Office Number: ${data.officeNo}</p>`
    } else if (data.getRole() === "Engineer") {
        return `<p>GitHub: <a href= 'https://github.com/${data.getGitHub()}'>${data.getGitHub()}</a></p>`
    } else if (data.getRole()=== "Intern") {
        return `<p>School: ${data.getSchool()}</p>`
    }
}
function getIcon(data) {
    if(data.getRole() ==="Manager") {
        return `<i class="bi bi-briefcase-fill"></i>`
    } else if (data.getRole() === "Engineer") {
        return `<i class="bi bi-github"></i>`
    } else if (data.getRole()=== "Intern") {
        return `<i class="bi bi-mortarboard-fill"></i>`
    }
}
module.exports = generatePage;
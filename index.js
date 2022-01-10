
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

const fs = require('fs');
const generatePage = require('./src/generatePage');

function writeToFile(data) {
    fs.writeFileSync('./dist/team.HTML', data);
}
const team = []
function baseEmployee(extraInfo, role) {
    inquirer
    .prompt([
        {
        type: 'text',
        name: 'name',
        message: "What is the employee's name?"
    },
    {
        type: 'text',
        name: 'id',
        message: "What is the employee's Id?"
    },
    {
        type: 'text',
        name: 'email',
        message: "What is the employee's email?"
    },

    
])
    .then(({ name, id, email })  => {
        

        if(role === 'Manager') {
        team.push(new Manager(name, id, email, extraInfo));
        
        promptNewEmployee();
        } else if (role === 'Engineer') {
            team.push(new Engineer(name, id, email, extraInfo));
            promptNewEmployee();
        } else if (role === 'Intern') {
            team.push(new Intern(name, id, email, extraInfo));
            promptNewEmployee();
        } else {
            return;
        }
        //console.log(data);

        console.log(team);

    });
}

function getManager () {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'officeNo',
                message: "What is the Manager's office number?"
            }
        ]
        )
        .then(({ officeNo }) => {
            baseEmployee(officeNo, 'Manager');
        })
}

function promptNewEmployee () {
    inquirer
        .prompt([
            {
                type: 'confirm',
                name: 'promptNew',
                message: "Would you like to create another employee?",
            }
        ])
        .then(({ promptNew }) => {
            if(promptNew === true){
              engineerOrIntern()
            } else {
                const userInput = generatePage(team);
                writeToFile(userInput);
            }
        })
}
function engineerOrIntern() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'eOrI',
                message: "Which employee would you like to add next?",
                choices: ["Engineer", "Intern"]
            }
        ])
        .then(({ eOrI }) => {
            if(eOrI === "Engineer") {
                getEngineer();
            } else {
                getIntern();            }
        })
}
function getIntern () {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'school',
                message: "What school does the intern attend?"
            }
        ]
        )
        .then(({ school }) => {
            baseEmployee(school, 'Intern');
        })
}
function getEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'gitHub',
                message: "What is the engineer's github username?"
            }
        ]
        )
        .then(({ gitHub }) => {
            baseEmployee(gitHub, 'Engineer');
        })
}
getManager();
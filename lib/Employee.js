const inquirer = require("inquirer");

class Employee {
    constructor(name = '') {
        this.name = name;
        this.id = 0;
        //this.employees = [];
        this.email = 'mikw@gmail.com';
        this.role;
    };
    getName() {
        inquirer
            .prompt({
                type: 'text',
                name: 'name',
                message: "What is the employee's name? (Required)"
            })
            .then(({ name }) => {
                this.name = new Employee(name);
                //console.log(Employee);
                this.getId();
            })
    };
    getId() {
        let newId = this.id + 1;
        console.log('employee id: ' + newId);
        this.id = newId;
        this.getEmail();
    };
    getEmail() {
        inquirer
        .prompt({
            type: 'text',
            name: 'email',
            message: "What is the employee's email?"
        })
        .then(({ email }) => {
            let newEmail = this.email;
            this.email = newEmail;
            this.getRole();
        })
    };
    getRole() {
        inquirer
            .prompt({
                type: 'list',
                name: 'role',
                message: "What is the employee's role?",
                choices: ["Manager", "Engineer", "Intern"]
            })
            .then(({ role }) => {
                let empRole = role
                this.role = empRole;
                console.log(role);
                console.log(this);
            })
    }
        
        
    }

module.exports = Employee;
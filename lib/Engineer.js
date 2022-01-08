const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;
    }
    getRole() {
        return "Engineer"
    }
    getGitHub() {
        return this.gitHub;
       // return this.role
        //return `https://github.com/${this.}`
    }
}
module.exports = Engineer;
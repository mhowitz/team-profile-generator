const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, extraInfo) {
        super(name, id, email);
        this.extraInfo = extraInfo;
    }
    getRole() {
        return "Engineer"
    }
    getGitHub() {
        return this.extraInfo;
       // return this.role
        //return `https://github.com/${this.}`
    }
}
module.exports = Engineer;
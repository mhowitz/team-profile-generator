const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, extraInfo) {
        super(name, id, email);
        this.extraInfo = extraInfo;
    }
    getRole() {
        return "Intern"
    }
}

module.exports = Intern;
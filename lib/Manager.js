const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, extraInfo) {
        super(name, id, email);
        this.extraInfo = extraInfo;
    }
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;
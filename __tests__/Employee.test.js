
const Employee = require('../lib/Employee');
//jest.mock('../lib/Employee');
//console.log(new Employee());

test('creates a new employee object', () => {
    const employee = new Employee('Mikayla');

    expect(employee.name).toBe('Mikayla');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('mikw@gmail.com');
});

test('gets employee name', () => {
    const employee = new Employee('Mikayla');

    expect(employee.getName()).toBe('Mikayla');
})

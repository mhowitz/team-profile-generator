
const Employee = require('../lib/Employee');
//jest.mock('../lib/Employee');
//console.log(new Employee());

test('creates a new employee object', () => {
    const employee = new Employee('Mikayla', '12', 'mikw@gmail.com');

    expect(employee.name).toBe('Mikayla');
    expect(employee.id).toEqual('12');
    expect(employee.email).toBe('mikw@gmail.com');
});

test('gets employee name', () => {
    const employee = new Employee('Mikayla');
    expect(employee.getName()).toBe('Mikayla');
})
test('gets employee id', () => {
    const employee = new Employee('Mikayla', '12');
    const empId = '12';
    expect(employee.getId()).toEqual(empId);
})

test('gets employee email', () => {
    const employee = new Employee('Mikayla', '12', 'mikw@gmail.com');
    const empEmail = 'mikw@gmail.com';

    expect(employee.getEmail()).toBe(empEmail);
});

test('gets employee role', () => {
    const employee = new Employee('Mikayla');
    expect(employee.getRole()).toBe('Employee');
})

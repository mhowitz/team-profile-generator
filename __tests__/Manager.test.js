
const Manager = require('../lib/Manager');

test('creates a new Manager object', () => {
    const manager = new Manager('Mikayla', '12', 'mikw@gmail.com', '155');

    expect(manager.name).toBe('Mikayla');
    expect(manager.id).toBe('12');
    expect(manager.email).toBe('mikw@gmail.com');
    expect(manager.extraInfo).toBe('155');
    
});

test('returns managers role ', () => {
    const manager = new Manager('Mikayla');
    const mRole = 'Manager';
    expect(manager.getRole()).toBe(mRole);
})
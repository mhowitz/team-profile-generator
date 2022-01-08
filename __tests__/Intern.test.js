const Intern = require('../lib/Intern');

test('gets intern object', () => {
    const intern = new Intern('Mikayla');

    expect(intern.getRole()).toBe('Intern')

})

test('gets intern school', () => {
    const intern  = new Intern("Mikayla", '12', 'email', 'uofu');
    expect(intern.extraInfo).toBe('uofu');
})


const Engineer = require('../lib/Engineer');

test('creates a new engineer object', () => {
    const engineer = new Engineer('Mikayla');
    const eRole = 'Engineer';
    expect(engineer.getRole()).toBe(eRole)
});

test('gets github username from engineer', () => {
    const engineer = new Engineer('Mikayla', '12', 'email', 'mhowitz');
    const gitHub = 'mhowitz';
    expect(engineer.getGitHub()).toBe(gitHub)
}) 
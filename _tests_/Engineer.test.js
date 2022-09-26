const { TestScheduler } = require('jest/build/jest');
const Engineer = require('../lib/Engineer');

describe ("New Engineer", () => {
    const engineer = new Engineer("Bob", 123, "nick@aol.com", "Nickmason01");
    test("test engineer", () => {
        expect(engineer.gitHub).toEqual("Nickmason01");
    })
})
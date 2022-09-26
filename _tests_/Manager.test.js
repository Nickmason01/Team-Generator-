const Manager = require('../lib/Manager');

describe ("New Manager", () => {
    const manager = new Manager("Bob", 123, "nick@aol.com", 34);
    test("test manager", () => {
        expect(manager.officeNum).toEqual(34);
    })
})
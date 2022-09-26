const { TestScheduler } = require("jest/build/jest");
const Intern = require("../lib/Intern")

describe ("New Intern", () => {
    const intern = new Intern("Bob", 123, "nick@aol.com", "NYU");
    test("test intern", () => {
        expect(intern.school).toEqual("NYU")
    })
})
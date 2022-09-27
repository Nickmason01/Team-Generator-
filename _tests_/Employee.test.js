
const Employee = require("../lib/Employee")
//const jest = require("jest")


describe("Instantiate new Employee", () => {
    const employee = new Employee("Bob", 123, "nick@aol.com");
    test("test employee", () =>{
        expect(employee.name).toEqual("Bob")
        expect(employee.id).toEqual(123)
        expect(employee.email).toEqual("nick@aol.com")

    })
});

describe ("get employee name", () => {
    const name = "Bob"
    const employee = new Employee (name)
    test("name", () => {
        expect(employee.name).toEqual(name)  
    })
});

describe ("get employee id", () => {
    const id = 100
    const employee = new Employee ("Bob", id);
    expect(employee.id).toEqual(id)
});

describe ("get employee email", () => {
    const email = "nick@aol.com"
    const employee = new Employee ("Bob", 100, email);
    expect(employee.email).toEqual(email)
});


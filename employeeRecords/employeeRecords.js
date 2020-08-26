"use strict"

let employees = [];

function Employee (name, title, salary, status) {
    this.name = name
    this.title = title
    this.salary = salary
    this.status = status
    this.printEmployeeForm = function(){
        console.log(this.name, this.title, this.salary, this.status);
    }
    employees.push(this);
}

let newEmployee = new Employee ("Bob", "Viceroy of the Frozen Steppe", 60000, "fullTime")
let newEmployee1 = new Employee ("Ada", "Spy", 120000, "fullTime")
let newEmployee2 = new Employee ("Leon", "Police Officer", 45000, "fullTime")

newEmployee1.status = "Contract"
newEmployee2.status = "Part-time"

newEmployee.printEmployeeForm();
newEmployee1.printEmployeeForm();
newEmployee2.printEmployeeForm();

console.log(employees);


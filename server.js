const inquirer = require("inquirer");
const sqlDatabase = require("./config/connection");
const db = require('./config/connection')

// menu questions 
const menu = [
  {
    type: "list",
    message: "What's the next move?",
    choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role", "Exit"],
    name: "menu"
  }
]

// Adding 
// add department questions 
const addDep = [
  {
    type: "input",
    message: "What's the name for this department?",
    name: "newDep"
  }
]

// add role questions
const addRole = [
  {
    type: "input",
    message: "What's the name for this role?",
    name: "newRole"
  },
  {
    type: "input",
    message: "What is the salary of this role?",
    name: "newRoleSalary"
  },
  {
    type: "choice",
    message: "What department does this role belong to?",
    choices: ["Engineering", "Finance", "Legal", "Sales"],
    name: "newRoleDep"
  }
]

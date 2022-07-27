//Imports express, inquirer, and mysql
const express = require("express");
const inquirer = require("inquirer");
const mysql = require("mysql");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//Connect to mysql database tables
const employeedb = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'employeetracker_db'
    },
    console.log(`Connected to the employeetracker_db database.`)
);

function displayOptions() {
    inquirer
    .prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'options',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role'],
        },
    ])
    .then((answers) => {
        console.log(answers)
    })
};


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
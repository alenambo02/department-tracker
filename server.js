//Imports express, inquirer, and mysql
const express = require("express");
const inquirer = require("inquirer");
const mysql = require("mysql");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const employeedb = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'employeetracker_db'
    },
    console.log(`Connected to the employeetracker_db database.`)
);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
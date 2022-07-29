//Imports inquirer and mysql packages
const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require("console.table");

//so no PORT cause no express???
// const PORT = process.env.PORT || 3001;

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
//prompt to navigate through all the different options 
const optionsPrompt = [
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'options',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role'],
        },
];
 
function displayOptions() {
    inquirer
    .prompt(optionsPrompt)

    .then(async(userChoice) => {
        switch(userChoice.options) {
            case 'View all departments':
                employeedb.query(`SELECT * FROM department`, function (err, results) {
                    console.log('hello')
                    console.table(results);
                
                })
               
                break;
            
            case 'View all roles':
                employeedb.query(`SELECT role_type.title, role_type.id, department.name, role_type.salary FROM role_type JOIN department ON role_type.department_id = department.id`, function (err, results) {
                    console.log('hello')
                    console.table(results);
                
                })
              
                break;

            case 'View all employees':
                employeedb.query(`SELECT employee.id, employee.first_name, employee.last_name, role_type.title AS title, department.name, role_type.salary, employee.manager_id AS manager
                FROM employee
                INNER JOIN role_type on employee.role_id = role_type.id
                INNER JOIN department on role_type.department_id = department.id `, function (err, results) {
                    console.log('hello')
                    console.table(results);
                })
               
                break;

            case 'Add a department':
               
                await addDepartment()
               
                break;

            case 'Add a role':
               
              
                break;

            case 'Add an employee':
                
              
                break;

            case 'Add an employeeUpdate an employee role':
                
             
                break;

        }
        displayOptions()
    
    })
}

displayOptions()






function addDepartment() {
    return new Promise(resolve => {
        inquirer
        .prompt({
            type: 'input',
            message: 'What is the name of the department?',
            name: 'departmentName',
        })
        .then((answer) => {
        employeedb.query(`INSERT INTO department (name) VALUES (?)`, [answer.departmentName], 
        (err, result) => {
            if (err) {
                console.log(err);
            }
            console.log("Department was added!")
            resolve("resolve")
        }) 
        })
    }) 
}

// function addRole() {

// }

// function addEmployee() {

// }











//listens to PORT at 3001
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });




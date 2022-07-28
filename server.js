//Imports inquirer and mysql packages
const inquirer = require("inquirer");
const mysql = require("mysql2");

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

    .then((userChoice) => {
        switch(userChoice.options) {
            case 'View all departments':
               
                employeedb.query(`SELECT * FROM department`, function (err, results) {
                    console.log('hello')
                    console.table(results);
                
                })
                displayOptions()
                break;
         

        }
    
    })
}

displayOptions()

// function viewAllDepartments() {
//     employeedb.query('SHOW * FROM department', function (err, results) {
//         console.log(results);
//     }) 
// }

//     employeedb.query('SHOW * FROM role_type', function (err, results) {
//         console.log(results);
//     });

//     employeedb.query('SHOW * FROM employee', function (err, results) {
//         console.log(results);
//     });


//     employeedb.query(' * FROM employee', function (err, results) {
//         console.log(results);
//     });




//listens to PORT at 3001
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });



// function displayOptions() {
//     inquirer
//     .prompt([
//         {
//             type: 'list',
//             message: 'What would you like to do?',
//             name: 'options',
//             choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role'],
//         },
//     ])
//     .then(function(answers){
//         console.log(answers)

//     viewAllDepartments()

// })
// }
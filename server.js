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
            
            case 'View all roles':
                employeedb.query(`SELECT role_type.id, role_type.title, department.name, role_type.salary FROM role_type JOIN department ON role_type.department_id = department.id`, function (err, results) {
                    console.log('hello')
                    console.table(results);
                
                })
                displayOptions()
                break;

            case 'View all employees':
                employeedb.query(`SELECT * FROM employee`, function (err, results) {
                    console.log('hello')
                    console.table(results);
                })
                displayOptions()
                break;

            case 'Add a department':
               

                displayOptions()
                break;

            case 'Add a role':
               

                displayOptions()
                break;

            case 'Add an employee':
                
                displayOptions()
                break;

            case 'Add an employeeUpdate an employee role':
                
                displayOptions()
                break;

        }
    
    })
}

displayOptions()





//listens to PORT at 3001
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });




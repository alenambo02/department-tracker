//Imports inquirer and mysql packages
const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require("console.table");

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
displayOptions()
 
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
               
                await addRole()

                break;

            case 'Add an employee':
                
                await addEmployee()

                break;

            case 'Add an employeeUpdate an employee role':
                
             
                break;

        }
        displayOptions()
    
    })
}






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

function addRole() {
    return new Promise(async resolve => {
        const departmentList = await getColumn("name", "department")
        inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the name of the role?',
                name: 'roleName' 
            },
            {
                type: 'number',
                message: 'What is the salary of the role?',
                name: 'salaryAmount' 
            },
            {
                type: 'list',
                message: 'What department does the role belong to?',
                name: 'department',
                choices: departmentList
            }
        ])
        .then((answer) => {

        const {roleName, salaryAmount, department} = answer
        let id
        departmentList.forEach((elem) => {
            if(elem.name === department) id = elem.id
        })    
        employeedb.query(`INSERT INTO role_type (title, salary, department_id) VALUES (?, ?, ?)`, 
        [roleName, salaryAmount, id], 
        (err, result) => {
            if (err) {
                console.log(err);
            }
            console.log("Role was added!")
            resolve("resolve")
        })
        })
    })
}

function addEmployee() {
    return new Promise(async resolve => {
        const roles = []
        const column = await getColumn("title","role_type")

        column.forEach((use) => {
            roles.push({"name": use.title, "id": use.id})
        })


        const managerFirst = await getColumn("first_name", "employee")
        const managerLast = await getColumn("last_name", "employee")
        const managers = []
        managerFirst.forEach((use, index) => {
            managers.push({"name": `${use.first_name} ${managerLast[index].last_name}`, "id" : use.id}) 
        })
        inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the employees first name?',
                name: 'first_name' 
            },
            {
                type: 'input',
                message: 'What is the employees last name?',
                name: 'last_name' 
            },
            {
                type: 'list',
                message: 'What is the employees role?',
                name: 'role',
                choices: roles
            },
            {
                type: 'list',
                message: 'What is your managers ID?',
                name: 'managerID',
                choices: ["None", ...managers]
            }

        ])
        .then(answer => {
            const {first_name, last_name, role, managerID} = answer
            let roleId
            let managerId
            roles.forEach((elem) => {
                if(elem.name === role) roleId = elem.id
                if(managerID === "None") managerId = null
            })

            employeedb.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`, 
            [first_name, last_name, roleId, managerId],
            (err, result) => {
                if (err) {
                    console.log(err);
                }
                else {
                console.log("Employee was added!")

                }
                resolve("resolve")
        })
        })
    })
}



const getColumn = (column, table) => {
    return new Promise(resolve => {
        employeedb.query(`SELECT ${table}.${column}, ${table}.id FROM ${table}`, (err, result) => {
            resolve(result)
        })
    })
}

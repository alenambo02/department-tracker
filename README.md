# Department-tracker
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  #Table of Content
  -[description](#Description)
  -[installation](#Installation)
  -[usage](#Usage)
  -[credits](#Credits)
  -[license](#License)
  -[contact](#Contact)

  ## Description:
  The purpose behind this project was to create a employee-tracker generator that will allow the user to view and manage the departments, roles, and employees in their company. That way the user can more easily organize and plan their business.

  You can see the profile generator layout below:

 

   ![alt text](./assets/ )

   You can view a full demo of this video below:
  https://drive.google.com/file/d/1PO9SH_3UnzqgtlUufgVJ6kGPTxD3wxCD/view

  ## Installation:
  In order to be able to utilize this generator within your command line, you would have to install npm inquirer package and mysql2. Npm inquirer package allows for prompts to be displayed to you within the command line. Mysq12 package allows the user to utilize mysql within their code.

  Below, I have displayed how I utilized inquirer to prompt what data a user wants displayed and the table generated from the option the user selected:

   ![alt text](./imgs/table%20.png)


  ## Usage:
  Within the command line you will be prompted with following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
  
  When selecting view all departments, view all roles, or view all employees you will be able to view your database through tables that are generated using mysql. 

  If I need to add a department to my database then I can choose that option and I will be prompted to enter the name of the department and it will be added to the database.

  If I need to add a role to my database then I can choose that option and I will be prompted to enter the name, salary, and department for that role. It will then be added to the database.
  
  If I need to add an employee then I can select that option and I will be prompted to enter the employee’s first name, last name, role, and manager for that employee. It will then be added to the database.

  If I need to update an employee role then I can select that option as well and I will be prompted to select an employee to update and their new role and this information is updated in the database.


  Below, you can view a code snippet of how I utilized mysql to generate tables of specific data request:

  ![alt text](./assets/ )
  ```
  employeedb.query(`SELECT employee.id, employee.first_name, employee.last_name, role_type.title AS title, department.name, role_type.salary, employee.manager_id AS manager
                FROM employee
                INNER JOIN role_type on employee.role_id = role_type.id
                INNER JOIN department on role_type.department_id = department.id`

  ```

  ## Credits:
  Helpful video: 
  I utilized https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba to generate markdown license badges.
 
  ## License:
  MIT 

  ## Contact:
  allleizq@gmail.com
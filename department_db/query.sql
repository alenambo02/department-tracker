SELECT * FROM department


SELECT role_type.id, role_type.title, department.name, role_type.salary FROM role_type JOIN department ON role_type.department_id = department.id




SELECT employee.id, employee.first_name AS First name, employee.last_name, role_type.title AS Title, department.name, role_type.salary, employee.manager_id
FROM employee
INNER JOIN role_type on employee.role_id = role_type.id
INNER JOIN department on role_type.department_id = department.id 


DROP DATABASE IF EXISTS employeetracker_db;
CREATE DATABASE employeetracker_db;

USE employeetracker_db;
-- creates department table with a column for id and name
CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL
);
-- creates role table with id, title, salary, and department id
CREATE TABLE role_type (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(50) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT,
  FOREIGN KEY (department_id)
  REFERENCES department(id)
  -- ON DELETE SET NULL
);
-- created table for employee id, first and last name, role id and manager id
CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  role_id INT,
  manager_id INT DEFAULT NULL,
  FOREIGN KEY (role_id) 
  REFERENCES role_type(id),
  FOREIGN KEY (manager_id) 
  REFERENCES employee(id)
  ON DELETE SET NULL
);


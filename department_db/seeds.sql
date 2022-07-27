INSERT INTO department (department_name)
VALUES  ("Chemistry"),
        ("Engineer"),
        ("Law");

INSERT INTO role_type (title, salary, department_id)
VALUES  ("Lawyer", 120000, 3),
        ("Legal Assistant", 60000, 3),
        ("Nurse", 90000, 1),
        ("Web Developer", 90000, 2),
        ("Mechanical Engineer", 90000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Bobby", "Will", 1, null),
        ("Pancho", "Villa", 3, null),
        ("Liliana", "Rojos", 4, null),
        ("Stephanie", "Rosales", 4, 3),
        ("Rio", "Santo", 5, null),
        ("Eddie", "Perez", 5, 5),
        ("Sally", "Ford", 2, null);
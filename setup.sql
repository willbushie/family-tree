-- Initial creation of database and tables

-- CREATE DATABASE
CREATE DATABASE IF NOT EXISTS familytree;
USE familytree;

-- person table
CREATE TABLE IF NOT EXISTS people (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fname VARCHAR(255) NOT NULL,
    mname VARCHAR(255) DEFAULT NULL,
    lname VARCHAR(255) NOT NULL,
    mother_id INT DEFAULT NULL,
    father_id INT DEFAULT NULL,
    date_of_birth DATE DEFAULT NULL,
    birth_location VARCHAR(255) DEFAULT NULL,
    date_of_death DATE DEFAULT NULL,
    cause_of_death VARCHAR(255) DEFAULT NULL,
    sex ENUM('male', 'female') NOT NULL,
    deleted DATETIME DEFAULT NULL,
    created DATETIME DEFAULT CURRENT_TIMESTAMP,
    last_modified DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- insert dummy data
INSERT INTO people
(fname, lname, date_of_birth, sex)
VALUES ('John', 'Doe', '1992-03-11', 'male');
SET @father_id = LAST_INSERT_ID();

INSERT INTO people
(fname, lname, date_of_birth, sex)
VALUES ('Jane', 'Doe', '1991-08-03', 'female');
SET @mother_id = LAST_INSERT_ID();

INSERT INTO people
(fname, lname, mother_id, father_id, date_of_birth, sex)
VALUES ('Jack', 'Doe', @mother_id, @father_id, '2008-11-03', 'male');



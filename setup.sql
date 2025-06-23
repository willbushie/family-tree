-- Initial creation of database and tables

-- CREATE DATABASE
CREATE DATABASE IF NOT EXISTS familytree;
USE familytree;

-- person table
CREATE TABLE IF NOT EXISTS people (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fname VARCHAR(255) NOT NULL,
    mname VARCHAR(255),
    lname VARCHAR(255) NOT NULL,
    mother_id INT,
    father_id INT,
    date_of_birth DATE,
    birth_location VARCHAR(255),
    date_of_death DATE,
    cause_of_death VARCHAR(255),
    sex VARCHAR(6),
    created DATETIME DEFAULT CURRENT_TIMESTAMP,
    last_modified DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


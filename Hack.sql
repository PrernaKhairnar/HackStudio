-- Create a new database (if it doesn't exist)
CREATE DATABASE IF NOT EXISTS hackstudio_db;

-- Switch to the newly created database
USE hackstudio_db;

-- Create a table to store contact form submissions
CREATE TABLE IF NOT EXISTS contact_submissions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    feedback TEXT,
    submission_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

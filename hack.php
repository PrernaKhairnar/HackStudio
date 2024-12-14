<?php
// Database configuration
$servername = "localhost";  // Replace with your MySQL server hostname
$username = "root";         // Replace with your MySQL username
$password = "";             // Replace with your MySQL password
$dbname = "hackstudio_db";  // Replace with your database name

// Create a database connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Insert data into the contact_submissions table (example)
$name = "John Doe";
$email = "johndoe@example.com";
$password = "hashed_password"; // You should hash the password for security
$feedback = "This is some feedback.";

$sql = "INSERT INTO contact_submissions (name, email, password, feedback) VALUES ('$name', '$email', '$password', '$feedback')";

if ($conn->query($sql) === TRUE) {
    echo "New record inserted successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the database connection
$conn->close();
?>

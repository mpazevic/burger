//Create connection to MySQL database and export file to server
//to connect upon running the server.
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "burgers_db"
});

connection.connect((err) => {
  if (err) {
    console.log("Error connecting: " + err.stack);
    return;
  };

  console.log("Connected to database as id: " + connection.threadId);
});

module.exports = connection;

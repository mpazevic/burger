//Create connection to MySQL database and export file to server
//to connect upon running the server.
const mysql = require("mysql");

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "burgers_db"
});

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "burgers_db"
  });
};

connection.connect((err) => {
  if (err) {
    console.log("Error connecting: " + err.stack);
    return;
  };

  console.log("Connected to database as id: " + connection.threadId);
});

module.exports = connection;

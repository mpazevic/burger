const connection = require("../config/connection.js");

const orm = {
  selectAll(tableInput, callback) {
    let queryString = "SELECT * FROM ??";

    connection.query(queryString, [tableInput], (err, result) => {
      if (err) {
        console.log("Error: " + err.stack);
        return;
      };
      callback(result);
    });
  },

  insertOne(tableInput, insertCol, insertColVal, callback) {
    let queryString = "INSERT INTO ??(??) VALUES (?)";

    connection.query(queryString, [tableInput, insertCol, insertColVal], (err, result) => {
      if (err) {
        console.log("Error: " + err.stack);
        return;
      };

      callback(result);
    });
  },

  updateOne(tableInput, setCol, setVal, whereCol, whereVal, callback) {
    let queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";

    connection.query(queryString, [tableInput, setCol, setVal, whereCol, whereVal], (err, result) => {
      if (err) {
        console.log("Error: " + err.stack);
        return;
      };

      callback(result);
    });
  }

};

module.exports = orm;

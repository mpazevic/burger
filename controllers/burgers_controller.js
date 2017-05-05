//Import express
const express = require("express");
const app = express();

//Import burgers.js file
const BurgerModel = require("../models/burgers.js");

const ROUTER = {
  openRoute(app) {
    app.get("/index", (req, res) => {
      BurgerModel.selectAllUndevoured( (burgerData) => {
        res.render("index", { burgers: burgerData })
      })
    });

    //Insert a burger value equal to the incoming request, and re-render the page
    //with new input afterwards
    app.post("/index", (req, res) => {
      BurgerModel.insertBurger(req.body.burger_name, (burgerData) => {
        // console.log("Body: " + req.body);
        console.log("You successfully entered a burger!");
      });

      BurgerModel.selectAllUndevoured( (burgerData) => {
        res.render("index", { burgers: burgerData })
      });
    });

    app.put("/index", ())
  }
};

module.exports = ROUTER;
// // Serve index.handlebars to the root route.
// app.get("/", function(req, res) {
//   connection.query("SELECT * FROM quotes;", function(err, data) {
//     if (err) {
//       throw err;
//     }
//     res.render("index", { quotes: data });
//   });
// });
//
// app.post("/", function(req, res) {
//   connection.query("INSERT INTO quotes (author, quote) VALUES (?, ?)", [
//     req.body.author, req.body.quote
//   ], function(err, result) {
//     if (err) {
//       throw err;
//     }
//
//     res.redirect("/");
//   });
// });
//
// app.delete("/:id", function(req, res) {
//   connection.query("DELETE FROM quotes WHERE id = ?", [req.params.id], function(err, result) {
//     if (err) {
//       throw err;
//     }
//     res.redirect("/");
//   });
// });
//
// // Show the user the individual quote and the form to update the quote.
// app.get("/:id", function(req, res) {
//   connection.query("SELECT * FROM quotes where id = ?", [req.params.id], function(err, data) {
//     if (err) {
//       throw err;
//     }
//
//     console.log(data);
//     res.render("single-quote", data[0]);
//   });
// });
//
// // Update a quote by an id and then redirect to the root route.
// app.put("/:id", function(req, res) {
//   connection.query("UPDATE quotes SET author = ?, quote = ? WHERE id = ?", [
//     req.body.author, req.body.quote, req.params.id
//   ], function(err, result) {
//     if (err) {
//       throw err;
//     }
//
//     res.redirect("/");
//   });
// });

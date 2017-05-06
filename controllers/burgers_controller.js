//Import express
const express = require("express");
const app = express();

//Import burgers.js file
const BurgerModel = require("../models/burgers.js");

const ROUTER = {
  openRoute(app) {
    app.get("/index", (req, res) => {
      BurgerModel.selectAllBurgers( (burgerData) => {
        res.render("index", {burgers: burgerData })
      });
    });

    //Insert a burger value equal to the incoming request, and re-render the page
    //with new input afterwards
    app.post("/index", (req, res) => {
      BurgerModel.insertBurger(req.body.burger_name, (burgerData) => {
        console.log("You successfully entered a burger!");
      });

      res.redirect("/index");
    });

    app.put("/index", (req, res) => {
      BurgerModel.updateBurger(req.body.id, (burgerData) => {
        console.log("You updated a burger!");
      });

      res.redirect("/index");

    })
  }
};

module.exports = ROUTER;

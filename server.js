//Necessary variables and dependencies for server.js
const express = require("express");
const app = express();
const methodOverride = require("method-override");
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

//Use handlebars information for formatting
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Import connection from config file and connect to MySQL database.
const connection = require("./config/connection.js");

// Import router from controller file
const ROUTER = require("./controllers/burgers_controller.js");
ROUTER.openRoute(app);

//Listen on specified port
app.listen(PORT, () => {
  console.log("App listening on port: " + PORT);
});

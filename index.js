// Require dotenv
require("dotenv").config();
// Require express
const express = require("express");
// Create an express app
const app = express();
const methodOverride = require("method-override");

// Middleware for jsx views
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
// Middleware for public views
app.use(express.static("public"));
// Middleware for body parser
app.use(express.urlencoded({ extended: true }));
// Middleware for method override
app.use(methodOverride("_method"));

app.use("/places", require("./controllers/places"));

// Home route
app.get("/", (req, res) => {
  res.render("home");
});

// Wildcard route
app.get("*", (req, res) => {
  res.render("error404");
});

// Start listening on the server port
app.listen(process.env.PORT);

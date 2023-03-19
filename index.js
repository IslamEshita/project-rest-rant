// Require dotenv
require("dotenv").config();
// Require express
const express = require("express");
// Create an express app
const app = express();

// Middleware for jsx views
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
// Middleware for public views
app.use(express.static("public"));

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

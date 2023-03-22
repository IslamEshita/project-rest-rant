const router = require("express").Router();
const places = require("../models/places");

// Index page
router.get("/", (req, res) => {
  res.render("places/index", { places });
});

router.post("/", (req, res) => {
  // Display the incoming data
  console.log(req.body);

  // Add a default image if one is not provided
  if (!req.body.pic) {
    req.body.pic = "http://placekitten.com/400/400";
  }

  // Add a default city if one is not provided
  if (!req.body.city) {
    req.body.city = "San Diego";
  }

  // Add a default state if one is not provided
  if (!req.body.state) {
    req.body.state = "USA";
  }
  places.push(req.body);
  res.redirect("/places");
});

// New Page
router.get("/new", (req, res) => {
  res.render("places/new");
});

module.exports = router;

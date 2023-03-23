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

// Edit page
router.get("/:id/edit", (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render("error404");
  } else if (!places[id]) {
    res.render("error404");
  } else {
    res.send("STUB EDIT places/:id/edit");
  }
});

// Delete
router.delete("/:id", (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render("error404");
  } else if (!places[id]) {
    res.render("error404");
  } else {
    places.splice(id, 1);
    res.redirect("/places");
  }
});

// Show route
router.get("/:id", (req, res) => {
  let id = Number(req.params.id);
  console.log(id);
  if (isNaN(id)) {
    console.log("NAN");
    res.render("error404");
  } else if (!places[id]) {
    console.log("No place with that ID");
    res.render("error404");
  } else {
    console.log("Showing page");
    res.render("places/show", { place: places[id], id });
  }
});

module.exports = router;

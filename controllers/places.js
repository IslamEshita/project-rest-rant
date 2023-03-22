const router = require("express").Router();

// Index page
router.get("/", (req, res) => {
  let places = [
    {
      name: "H-Thai-ML",
      city: "Seattle",
      state: "WA",
      cuisines: "Thai, Pan-Asian",
      pic: "/images/hl_thai_ml.jpg",
    },
    {
      name: "Coding Cat Cafe",
      city: "Phoenix",
      state: "AZ",
      cuisines: "Coffee, Bakery",
      pic: "/images/coding_cat_cafe.jpg",
    },
  ];
  res.render("places/index", { places });
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.send("POST /places");
});

// New Page
router.get("/new", (req, res) => {
  res.render("places/new");
});

module.exports = router;

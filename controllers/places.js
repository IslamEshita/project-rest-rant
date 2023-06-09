const router = require("express").Router();
const db = require("../models");

router.get("/", (req, res) => {
  db.Place.find()
    .then((places) => {
      res.render("places/index", { places, title: "Restaurant Index" });
    })
    .catch((err) => {
      console.log(err);
      res.render("error404");
    });
});

router.post("/", (req, res) => {
  db.Place.create(req.body)
    .then(() => {
      res.redirect("/places");
    })
    .catch((err) => {
      console.log("err", err);
      if (err && err.name == "ValidationError") {
        let message = "Validation Error: ";
        for (var field in err.errors) {
          message += `${field} was ${err.errors[field].value}. `;
          message += `${err.errors[field].message}`;
        }
        console.log("Validation error message", message);
        res.render("places/new", { message });
      } else {
        res.render("error404");
      }
    });
});

router.get("/new", (req, res) => {
  res.render("places/new");
});

router.get("/:id", (req, res) => {
  db.Place.findById(req.params.id)
    .populate("comments")
    .then((place) => {
      console.log(place.comments);
      res.render("places/show", { place, title: place.name });
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

router.put("/:id", (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    (updatedRestaurant) => {
      console.log(updatedRestaurant);
      res.status(303).redirect("/places");
    }
  );
});

router.delete("/:id", (req, res) => {
  console.log(req.params.id);
  db.Place.findByIdAndDelete(req.params.id)
    .then((deletedBread) => {
      console.log(`Deleted the restuarant with id: {req.params.id}`);
    })
    .catch((err) => {
      console.log(`Error deleting restaurant with id: {req.params.id}`);
      console.log(err);
    });
  res.status(303).redirect("/places");
});

router.get("/:id/edit", (req, res) => {
  db.Place.findById(req.params.id).then((foundRestaurant) => {
    res.render("places/edit", {
      place: foundRestaurant,
    });
  });
});

// Comments here
router.post("/:id/comment", (req, res) => {
  // Log request
  console.log(req.body);
  console.log(req.params.id);

  req.body.rant = req.body.rant ? true : false;

  db.Place.findById(req.params.id)
    .then((place) => {
      console.log(`1. Found place: ${place}`);
      db.Comment.create(req.body)
        .then((comment) => {
          place.comments.push(comment.id);
          place.save().then(() => {
            res.redirect(`/places/${req.params.id}`);
          });
        })
        .catch((err) => {
          console.log(err);
          res.render("error404");
        });
    })
    .catch((err) => {
      res.render("error404");
    });
});

router.delete("/:id/comment/:commentId", async (req, res) => {
  console.log("Req is" + req.body);
  console.log(req.params);
  console.log(req.body);

  await db.Comment.findByIdAndDelete(req.params.commentId);
  res.redirect(`/places/${req.params.id}`);
});

module.exports = router;

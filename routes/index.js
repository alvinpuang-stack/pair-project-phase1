var express = require("express");
var router = express.Router();
const user = require("../routes/user");
const course = require("../routes/course");
const category = require("../routes/category");
const courseController = require("../controllers/courseController");

/* GET home page. */
router.get("/login", function (req, res) {
  res.render("login", { errors: req.flash("errors") });
});
router.get("/register", function (req, res) {
  res.render("register", { errors: req.flash("errors") });
});


router.use("/users", user);
router.use("/courses", course);
router.use("/categories", category);
router.get("/logout", function (req, res) {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    } else {
      res.redirect("/login"); // Redirect ke halaman login setelah logout
    }
  });
});

module.exports = router;
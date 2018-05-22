var express = require("express");

var router = express.Router();
var tofu = require("../models/tofu.js");

// get route -> index
router.get("/", function(req, res) {
  res.redirect("/tofu");
});

router.get("/tofu", function(req, res) {
  // express callback response by calling burger.selectAllBurger
  tofu.all(function(tofuData) {
    // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
    res.render("index", { tofu_data: tofuData });
  });
});

// post route -> back to index
router.post("/tofu/create", function(req, res) {
    console.log(req.body)
  // takes the request object using it as input for burger.addBurger
  tofu.create(req.body.tofu_name, function(result) {
    // wrapper for orm.js that using MySQL insert callback will return a log to console,
    // render back to index with handle
    console.log(result);
    res.redirect("/");
  });
});

// put route -> back to index
router.put("/tofu/:id", function(req, res) {
  tofu.update(req.params.id, function(result) {
    // wrapper for orm.js that using MySQL update callback will return a log to console,
    // render back to index with handle
    console.log(result);
    // Send back response and let page reload from .then in Ajax
    res.sendStatus(200);
  });
});

module.exports = router;

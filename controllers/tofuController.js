var express = require("express");

var router = express.Router();
var tofu = require("../models/tofu.js");

// get route -> index
// router.get("/", function(req, res) {
//   res.redirect("/tofu");
// });

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
  tofu.create(['tofu_name'],[req.body.tofu_name] ,function(result) {
    // wrapper for orm.js that using MySQL insert callback will return a log to console,
    // render back to index with handle
    console.log(result);
    res.redirect("/tofu");
  });
});

// put route -> back to index
router.put("/tofu/:id", function(req, res) {
  var condition="id = " + req.params.id;
  tofu.update({devoured:true},condition,function(result) {
    // wrapper for orm.js that using MySQL update callback will return a log to console,
    // render back to index with handle
    console.log(result);
    res.redirect('/tofu')
    // Send back response and let page reload from .then in Ajax
  });
});

module.exports = router;

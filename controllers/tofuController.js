var express = require("express");
var router = express.Router();
var tofu = require("../models/tofu.js");

// get route -> index
router.get("/", function(req, res) {
  res.redirect("/tofu");
});

router.get("/tofu", function(req, res) {
  // express callback response
  tofu.all(function(tofuData) { 
    res.render("index", { tofu_data: tofuData });
  });
});

// post route -> back to index
router.post("/tofu/create", function(req, res) {
    console.log(req.body)
  // takes the request object using it as input for tofu.addtofu
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
    // back to index  
    console.log(result);
    // Send back OK response  page reload
    res.sendStatus(200);
  });
});

// router.delete("/api/tofu/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   tofu.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });



module.exports = router;

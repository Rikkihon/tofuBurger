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
    console.log(result);
    res.sendStatus(200);
  });
});


router.delete("/api/tofu/:id", function(req, res) {
  console.log("This is req.params.id" + req.params.id);
  tofu.delete(req.params.id, function(result){
    console.log("This is the result after the delete", result);
    res.render(result);
    
  });
});
    
  


module.exports = router;

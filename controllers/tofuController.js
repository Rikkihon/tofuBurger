var express = require("express");
var router = express.Router();
var tofu = require("../models/tofu.js");

var schema
// get route -> index
router.get("/", function(req, res) {
  res.redirect("/tofu");
});

router.get("/tofu", function(req, res) {
  // express callback response
  tofu.all(function(tofuData) { 
    res.render("index", { tofu_data: tofuData });
    //console.log(tofuData)
  });
});

// post route -> back to index
router.post("/api/tofu/create", function(req, res) {
    console.log(req.body)
  // takes the request object using it as input for tofu.addtofu
  tofu.create(req.body.tofu_name, function(result) {
    // wrapper for orm.js that using MySQL insert callback will return a log to console,
    // render back to index with handle
    console.log("the result 1 is " + JSON.stringify(result));
    res.redirect("/");
  });
});

// put route -> back to index
//self, try post here 
router.put("/tofu/:id", function(req, res) {
  tofu.update(req.params.id, function(result) { 
    console.log("the result is: " + JSON.stringify(result));
    res.sendStatus(200);
  });
});

router.delete("/api/tofu/:id", function(req, res) {
  console.log("This is req.params.id from the controller" + req.params.id);
  tofu.delete(req.params.id, function(result){
    console.log("This is the result after the delete", result);
    res.render(result);
    
  });
});
    
router.delete("/tofu/:id",(req,res)=> {
  console.log("req.params.id" + req.params.id);
  console.log("You got here!")
  res.sendStatus(200);
  tofu.delete("delete from `tofu` where id = " + req.params.id), function(result){(err)
      if(err) {
          res.header("Access-Control-Allow-Headers", "Authorization, Origin, X-Requested-With, Content-Type, Accept");
          res.header("Access-Control-Allow-Methods", "PATCH, POST, GET, PUT, DELETE, OPTIONS");
          res.header("Access-Control-Allow-Methods", "POST, GET, DELETE");
          res.header("Access-Control-Allow-Credentials", "true");
          return res.send(err);
      } else {
          console.log("successfully deleted")
      }
  }
});



module.exports = router;

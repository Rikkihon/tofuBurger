let express = require("express");
let bodyParser = require("body-parser");


var PORT = process.env.PORT || 3000;
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());


var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/tofuController.js");

app.use(routes);
app.use("/cors/*", function(req, res) {
  req.pipe(request(req.params[0])).pipe(res);
});


app.listen(PORT, function() {
  console.log("Listening on port:%s", PORT);
});

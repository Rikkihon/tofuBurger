var orm = require("../config/orm.js");

var tofu = {
  all: function(cb) {
    orm.all("tofu", function(res) {
      cb(res);
    });
  },
  create: function(name, cb) {
    orm.create("tofu", [
      "tofu_name", "devoured"
    ], [
      name, false
    ], cb);
  },
  update: function(id, cb) {
    var condition = "id=" + id;
    orm.update("tofu", {
      devoured: true
    }, condition, cb);
  }
};

module.exports = tofu;


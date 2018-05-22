var orm = require("../config/orm.js");

var tofu = {
  all: function(cb) {
    orm.all("tofu", function(res) {
      callback(res);
    });
  },
  create: function(name, cb) {
    orm.create("tofu", [
      "tofu_name", "eaten delicately"
    ], [
      name, false
    ], callback);
  },
  update: function(id, cb) {
    var condition = "id=" + id;
    orm.update("tofu", {
      devoured: true
    }, condition, callback);
  }
};

module.exports = tofu;

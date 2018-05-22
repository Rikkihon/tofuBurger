var orm = require("../config/orm.js");

var tofu = {
  all: function(cb) {
    orm.all("tofu", function(res) {
      cb(res);
    });
  },
  create: function(cols, vals, cb) {
    orm.create("tofu", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("tofu", objColVals, condition, function(res) {
      cb(res);
    });
}
};



module.exports = tofu;

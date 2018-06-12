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
  },
  deleteOne: function(table, condition, conditionVal, callback){
    var queryString = 'DELETE FROM  tofu_db WHERE id =' + req.params.id;

    connection.query(queryString, [conditionVal], function(err, data){
      if(err) throw err;
      callback(data);
    });
  }

};

module.exports = tofu;


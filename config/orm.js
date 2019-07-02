var connection = require("./connection.js");


function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function objToSql(ob) {
  // column1=value, column2=value2,...
  var arr = [];

  for (var key in ob) {
    arr.push(key + "=" + ob[key]);
  }

  return arr.toString();
}

var orm = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    console.log("the table input is " ,tableInput);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // vals is an array of values that we want to save to cols
  // cols are the columns we want to insert the values into
  create: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log("The create querySTring is: " , queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // objColVals would be the columns and values that you want to update
  // an example of objColVals would be {name: panther, sleepy: true}
  update: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
    delete: function(table, cols, vals, cb){
    //delete: function(table, queryString, cb) {
    console.log("You got here inside of the ORM delete ");
    //console.log("This should show you the id from the ORM " + cols.toString());
    //var queryString = `DELETE FROM tofu WHERE id=${id}`  ;
    var queryString = `DELETE FROM `+ `tofu_db`+`.`+`tofu ` + `WHERE` +` id`+ `=` + `'144'`  ;
    console.log("The queryString is " + queryString)
    
    
    connection.query(queryString, vals, function(err, result) {
      if (err){ 
        throw err;
      }
      console.log("the error is + " , err);
     cb(result);
    });
  }
}


module.exports = orm;

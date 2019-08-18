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
<<<<<<< HEAD
    console.log("The tableInput is" + tableInput);
=======
    console.log("the table input is " ,tableInput);
>>>>>>> d6455b940624662f08e78753aaf44a199f907954
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  
  // vals is an array of values that we want to save to columnsbi
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
    
    console.log("You got here inside of the ORM delete ");

  delete: function(table,cols, num, vals, objColVals, condition, cb) {
    console.log("You got here inside the ORM");
     
    var queryString = "DELETE FROM `tofu_db.tofu' WHERE id=" + (objToSql(num)) + ";" +
    
    connection.query(queryString, function(err, result) {
      if (err) throw err;
     cb(result);
    });
  }
}


module.exports = orm;

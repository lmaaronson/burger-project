// Import MySQL connection.
var connection = require("../config/connection.js");

// Helper function for SQL syntax.
// EXAMPLE: Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// // ["?", "?", "?"].toString() => "?,?,?";
// function printQuestionMarks(num) {
//   var arr = [];

//   for (var i = 0; i < num; i++) {
//     arr.push("?");
//   }

//   return arr.toString();
// }



// // Helper function to convert object key/value pairs to SQL syntax
function objectToSQL(object) {
  var arr = [];


  // loop through the keys and push the key/value as a string int arr
//   for (var key in object) {
//     var value = object[key];
    
//     // check to skip hidden properties
//     if (Object.hasOwnProperty.call(object, key)) {
    
//     // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
//       if (typeof value === "string" && value.indexOf(" ") >= 0) {
//         value = "'" + value + "'";
//       }
//         // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
//         // e.g. {sleepy: true} => ["sleepy=true"]
//       arr.push(key + "=" + value);
//     }
//   }
//   // translate array of strings to a single comma-separated string
//   return arr.toString();
// }




//connect to MySQL database
connection.connect(function(error){
  if (error){
    console.log("error :connecting " + error.stack);
    return;
  };
  console.log("connect as id " + connection.threadIdID);
})




// methods for MYSQL commands, create the ORM object to perfomr the queries in SQL
var orm = {

  selectALL: function(callback){ // callback function for retn all
    
    //run mysql query 
    connection.query("SELECT * FROM burgers", function (error, result){
    if (error) {
      throw error;
    }
    callback(result);
  
  });
},




  insertOne: function(table, columns, values, callback) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, values, function(err, result) {
      if (err) {
        throw err;
      }

      callback(result);
    });
  },
  


//function that updates a single table entry
   updateOne: function(table, objColVals, condition, callback) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);

    //perform the database query
    connection.query(queryString, function(error, result) {
      if (error) {
        throw error;
      }

      //return callback
      callback(result);
    });
  }}
};


// Export the orm object for the model (burger.js).
module.exports = orm;

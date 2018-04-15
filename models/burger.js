// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");


//create the burger object
var burger = {

  //set up to select all buger table entries; cb = callback
  selectAll: function(cb) {
    orm.selectAll('burgers', function(res) {
      cb(res);
    });
  },

  // The variables cols and vals are arrays
  insertOne: function(cols, vals, cb) {
    orm.insertOne('burgers', cols, vals, function(res) {
      cb(res);
    });
  },

  // The objColVals is an object that make specific columns with specific values when called
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne('burgers', objColVals, condition, function(res) {
      cb(res);
  });
}
}


// Export the database functions for the controller (burgerController.js).
module.exports = burger;

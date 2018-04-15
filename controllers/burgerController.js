// use the required node elements
var express = require('express');
var router = express.Router();

//import the model (burger.js) to use as the database associated with it from mysql
var burger = require('../models/burger.js');

//create the routes and logic for all to communicate properly
// go to the indec page and render all the burgers to the DOM
router.get('/', function (require, respond){
  burger.selectAll(function(data){
    var burgerObject = {
      bugers: data
    }; 
    console.log(burgerObject)
    res.render('index', burgerObject)
  });
});


//  create a new burger
router.post("bugers", function(require, respond) {
  buger.insertOne (["burger_ name"],
    [req.body.burger_name], 
  
  function(data){
    respond.redirect ("/");
  });
});


//  eat a burger
router.put("/burgers/:id", function (require, respond){
  var condition = "id = " + req.params.id;

  burger.updateOne({
    eaten: true
  }, condition, function(data) {
    respond.redirect("/");
  });
});

//export routes for server.js to use
module.exports = router;
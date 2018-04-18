// use the required node elements
var express = require('express');
var router = express.Router();

//import the model (burger.js) to use as the database associated with it from mysql
var burger = require('../models/burger.js');

//create the routes and logic for all to communicate properly
// go to the index page and render all the burgers to the DOM

router.get('/', function (request, response){
  burger.selectAll(function(data){
    var burgerObject = {
      burgers: data    //eaching through this from DB
    }; 
    console.log(burgerObject)
    response.render('index', burgerObject)   //passes the info from the DB and send to the front end
  });
});


//  create a new burger
//only happens if the button is clicked 
router.post("/burgers", function(request, response) {
  console.log(request.body)
  burger.insertOne (["burger_name"],
    [request.body.burger_name, 0], // 0 represents not devaoured
  
  function(data){
    console.log("we are in the callback of the burger.insertOne function")
    
    response.send(data);
  });
});


//  eat a burger
router.put("/burgers/:id", function (request, response){
  var condition = "id = " + request.params.id;
  console.log(request.params)
  burger.updateOne("devoured=true", condition, function(data) {
    response.send(data);
  });
});

//export routes for server.js to use
module.exports = router;
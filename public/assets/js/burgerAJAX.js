// // Make sure we wait to attach our handlers until the DOM is fully loaded.
//makes the add new burger button work

$(function() {
  $("#newBurgerButton").on("click", function(event) {
    event.preventDefault()
    var newBurgerName = $("#newBurgerName").val()
  

    // Send the POST request.
    $.ajax("/burgers", {
      type: "POST",
      data: {"burger_name": newBurgerName}
    })
    .then(
      function(responseFromPostRoute) {
        // console.log(responseFromPostRoute);
        // Reload the page to get the updated list
      location.reload();
      }
    );
  });
});


//devoured burger button work
$(function() {
  $(".eat-da-burger").on("click", function(event) {
    event.preventDefault()
    console.log($(this).data("id"))
  
   var burgerId= $(this).data("id")
    
    // var eatBurger = $(".eat-da-burger").val()
    // console.log("eat burger button")

    // Send the put request.
    $.ajax("/burgers/" + burgerId, {    // "/burgers/25"
      type: "PUT",
      
    })
    .then(
      function(res) {
        console.log("In AJAX as response from controller.")
        // console.log(responseFromPostRoute);
        // Reload the page to get the updated list
      console.log(res);
      location.reload();
      }
    );
  });
});

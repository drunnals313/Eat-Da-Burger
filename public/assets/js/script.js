// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-devour").on("click", function(event) {
      var id = $(this).data("id");
      var newDevour = $(this).data("newdevour");
  
      var newDevourState = {
        purchased: newDevour
      };
  
  
      
      // Send the PUT request.
      $.ajax("/api/items/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function() {
          console.log("changed purchased to", newDevour);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-update-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#djr").val().trim(),
        /* price: $("#pa").val().trim(),
        purchased: $("[name=purchased]:checked").val().trim() */
      };
  
      // Send the POST request.
      $.ajax("/api/items", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new item");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/items/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted item", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });



/* 
$(function () {
   
    $(".create-update-form").on("submit", function (event) {
        event.preventDefault();
        var submittedBurger = {
            name: $("#djr").val().trim(),
        };
        // Send the POST request.
        $.ajax("./api/burgers", {
            type: "POST",
            data: submittedBurger
        }).then(
            function () {
                location.reload();
            }
        );
    }); 
    


    // not devouring the burgers correctly in deployed heroku version   almost there
    $(".devourNow").on("click", function (event) {
        var id = $(this).data("id");
        /* var eatNow = $(this).data("eatburger");

        var orderOut = {
            devoured: "true"
        };

        // Send the PUT request.
        $.ajax("./api/burgers/" + id, {
            type: "PUT",
            data: orderOut
        }).then(
            function () {
                console.log("changed to");   //eatNow
                
                location.reload();
            }
        );
    }); 
});
 */

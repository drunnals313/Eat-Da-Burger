
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
        var eatNow = $(this).data("eatburger");

        var orderOut = {
            devoured: eatNow
        };

        // Send the PUT request.
        $.ajax("./api/burgers/" + id, {
            type: "PUT",
            data: orderOut
        }).then(
            function () {
                console.log("changed to", eatNow);
                
                location.reload();
            }
        );
    }); 
})

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
*/
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

/* router.put("/api/burgers/:id", (req, res) => {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, result => {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
}); */
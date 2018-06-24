//need ajax put call her for burger_id
$(function () {
    $("#devourNow").on("click", function (event) {
        var id = $(this).data("value");
        var orderUp = $(this).data("name");

        var orderOut = {
            devoured: orderUp
        };

        // Send the PUT request.
        $.ajax("./api/burgers/" + id, {
            type: "PUT",
            data: orderOut
        }).then(
            function () {
                console.log("changed to", orderUp);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

 
    $(".create-update-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
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
                console.log("Added new burger");
                location.reload();
            }
        );
    });
})
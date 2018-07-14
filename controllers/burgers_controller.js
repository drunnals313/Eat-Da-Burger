var express = require('express');

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", function (req, res) {
    burger.insertOne(req.body.burger_name, function () {
        res.redirect("/");
    });
});

router.put("api/burgers/:id", function (req, res) {
    var id = req.params.id;

    console.log("id", id);

    burger.updateOne({
        devoured: req.body.devoured
    }, id, result => {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
    /* burger.updateOne(id, function () {
        res.redirect("/");
    }); */
});




module.exports = router;
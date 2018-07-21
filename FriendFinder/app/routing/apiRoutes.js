var express = require("express");

var app = express();

var friendData = require("../data/friends");
var sum = 0

module.exports = function (app) {
    app.get("/api/home", function (req, res) {
        res.json(tableData)
    })

    app.get("/api/friends", function (req, res) {
        res.json(friendData)
    })

    app.post("/api/friends", function (req, res) {
        if (friendData.indexOf(req.body.name)) {
            console.log("I'm already here bruh.")
            sum = 0
            req.body.scores.forEach(sumScore);
            console.log(sum)
        } else {
            friendData.push(req.body);

        }

    });
};

function sumScore(nums) {
    sum += parseInt(nums);
}
// function getSum(total, num) {
//     return total + num;
// }
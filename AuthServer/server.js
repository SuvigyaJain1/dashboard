"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var PORT = 5000;

app.use(express.json());

app.post('/signin', function (req, res) {

    console.log(req.body);
    var user = req.body.user;
    setTimeout(function () {
        console.log("logged in new user ".concat(user));
        res.send({ status: 200, msg: "verified" });
    }, 4000);
});

app.post('/signout', function (req, res) {
    var user = req.body.user;
    setTimeout(function () {
        console.log("logged out user ".concat(user));
        res.send({ status: 200, msg: "logged out" });
    }, 3000);
});
var server = app.listen(PORT, function () {
    console.log("Started node server on port ".concat(PORT));
});

server.on('close', ()=> {
    console.log('Shutting down server...');
})
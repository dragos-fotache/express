"use strict";
var express = require("express");
function index(req, res, next) {
    //render page
    res.send("not yet implemented");
}
var router = express.Router();
exports.router = router;
router.get("/", index);

"use strict";
var express = require("express");
function index(req, res, next) {
    res.render("index", { 'title': 'Express' });
}
var router = express.Router();
exports.router = router;
router.get("/", index);

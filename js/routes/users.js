"use strict";
var express = require("express");
function index(req, res, next) {
    res.send('Your search was: ' + req.params['search']);
}
var router = express.Router();
exports.router = router;;
router.get("/:search", index);

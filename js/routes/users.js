/// <reference path="../typings/index.d.ts" />
"use strict";
var express = require("express");
var router = express.Router();
exports.users = router;
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

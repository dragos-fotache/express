/// <reference path="../typings/index.d.ts" />
"use strict";
var express = require("express");
var router = express.Router();
exports.routes = router;
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

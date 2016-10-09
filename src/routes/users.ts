"use strict";

import * as express from "express";
import * as mongo from "mongodb";
import * as bson from "bson";

var Server = mongo.Server,
    Db = mongo.Db,
    BSON = bson.BSONPure;

var server = new Server('localhost', 27017);
var db = new Db('users', server);

db.open(function (err, db) {
    if (!err) {
        console.log("Connected to 'users' database");
        db.collection('users', { strict: true }, function (err, collection) {
            if (err) {
                console.log("The 'users' collection doesn't exist.");
            }
        });
    }
});

function byName(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.send('User name was: ' + req.params['name']);
}

function getAll(req: express.Request, res: express.Response, next: express.NextFunction) {

    db.collection('users', function (err, collection) {
        collection.find().toArray(function (err, items) {
            res.json(items);
        });
    });

}

var router: express.Router = express.Router();

router.get("/:name", byName);
router.get("/", getAll);

export { router };
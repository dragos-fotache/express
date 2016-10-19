"use strict";

import * as mongoose from "mongoose";
import * as express from "express";
import * as uuid from "node-uuid";
import * as session from "express-session";

import { User } from "../model/User";

function login(req, res: express.Response, next: express.NextFunction) {

    let name = req['body'].name 
    let password = req['body'].password;

    let q = User.findOne({ name: name }, (err, user) => {

        var resp = res;
        var requ = req;

        if (err) {
            resp.status(500);
        } else {
            if (user) {
                if (user['password'] == password) {
                    resp.status(200);
                    console.log("User found, password matched.");
                    req.session.user_name = name;
                    req.session.isLoggedIn = true;
                } else {
                    resp.status(401);
                    console.log("User found, password not matched.");
                }
            } else {
                resp.status(401);
                console.log("User not found.");
            }
        }

        resp.send("");
    });

}

var router: express.Router = express.Router();

router.post("/", login);

export { router };
"use strict";

import * as express from "express";

function login(req: express.Request, res: express.Response, next: express.NextFunction) {

    console.log(req['body'].name + " - " + req['body'].password);

    res.send("");
}

var router: express.Router = express.Router();

router.post("/", login);

export { router };
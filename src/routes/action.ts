"use strict";

import * as express from "express";

function action(req: express.Request, res: express.Response, next: express.NextFunction) {
    let sessionId = req["cookies"]["session"]["sessionId"];
    let userName = req["cookies"]["session"]["userName"];
    console.log(userName, sessionId, global["sessionId"]);
    res.send("");
}

var router: express.Router = express.Router();

router.get("/", action);

export { router };
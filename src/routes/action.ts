"use strict";

import * as express from "express";

function action(req, res: express.Response, next: express.NextFunction) {

    if (req.session.isLoggedIn) {
        res.status(200);
    } else {
        res.status(401);
    }
    res.send("");

}

var router: express.Router = express.Router();

router.get("/", action);

export { router };
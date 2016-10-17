"use strict";

import * as express from "express";
import { client } from "../app";


function action(req, res: express.Response, next: express.NextFunction) {

    res.send("");

}

var router: express.Router = express.Router();

router.get("/", action);

export { router };
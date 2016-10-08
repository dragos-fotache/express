"use strict";

import * as express from "express";

function index(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render("index", { 'title' : 'Express' });
}

var router: express.Router = express.Router();

router.get("/", index);

export { router };
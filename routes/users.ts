"use strict";

import * as express from "express";

function index(req: express.Request, res: express.Response, next: express.NextFunction) {
  //render page
  res.send("not yet implemented");
}

var router: express.Router = express.Router();

router.get("/", index);

export { router };
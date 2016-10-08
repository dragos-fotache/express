"use strict";

import * as express from "express";

function index(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.send(req.params['search']);
}

var router: express.Router = express.Router();

router.get("/:search", index);

export { router };
"use strict";

import * as express from "express";

import { Person } from "../model/Person";

var p: Person = new Person("John", "Smith");

function index(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.header({"test" : "1234"});

  res.send(req.params['search']);
}

var router: express.Router = express.Router();

router.get("/:search", index);

export { router };
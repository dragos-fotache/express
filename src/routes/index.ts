"use strict";

import * as express from "express";
import * as mysql from "mysql";

var connection = mysql.createConnection({
  host     : 'us-cdbr-iron-east-04.cleardb.net',
  user     : 'bb8476f17060ad',
  password : '35ae4421',
  database : 'heroku_1a9009448f5bede'
});


function index(req: express.Request, res: express.Response, next: express.NextFunction) {
  connection.connect();

  connection.query("Select * from test",
    function (err, result) {
      if (err) throw err;
      res.json(result);
    });

  connection.end();
}

var router: express.Router = express.Router();

router.get("/", index);

export { router };
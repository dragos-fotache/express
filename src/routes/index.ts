"use strict";

import * as express from "express";
import * as mysql from "mysql";

var db_config = {
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'test'
};

var connection: mysql.IConnection;

function index(req: express.Request, res: express.Response, next: express.NextFunction) {

    connection = mysql.createConnection(db_config);

    connection.query("Select * from test",
        function (err, result) {
            if (err) throw err;
            res.json(result);
        });

    connection.on('error', function (err) {
        console.log(err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
        } else {
            throw err;
        }
    });
}

var router: express.Router = express.Router();

router.get("/", index);

export { router };
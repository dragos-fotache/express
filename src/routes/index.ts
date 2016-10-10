"use strict";

import * as express from "express";
import * as mysql from "mysql";


<<<<<<< HEAD
var db_config = {
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'test'
};
=======
// var db_config = {
//     host: 'localhost',
//     user: 'root',
//     password: '1234',
//     database: 'test'
// };

 var db_config = {
     host: 'us-cdbr-iron-east-04.cleardb.net',
     user: 'bb8476f17060ad',
     password: '35ae4421',
     database: 'heroku_1a9009448f5bede'
 };
>>>>>>> 91dffe5d66871fe9bca529ba309b438be9f3a665

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
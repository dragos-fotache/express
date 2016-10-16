"use strict";

import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as express from "express";
import * as path from "path";
import * as cors from "cors";
import * as mongoose from "mongoose";

import { router as actionRouter } from "./routes/action";
import { router as loginRouter } from "./routes/login";

/**
 * The server.
 *
 * @class Server
 */
class Server {

  public app: express.Application;

  /**
   * Constructor.
   *
   * @class Server
   * @constructor
   */
  constructor() {
    //create expressjs application
    this.app = express();

    //configure application
    this.config();

    //configure routes
    this.routes();

    mongoose.connect('mongodb://localhost/users');
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log("Connected!");
    });
  }

  /**
   * Configure application
   *
   * @class Server
   * @method config
   * @return void
   */
  private config() {
    //mount json form parser
    this.app.use(bodyParser.json());

    //mount query string parser
    this.app.use(bodyParser.urlencoded({ extended: true }));

    this.app.use(cookieParser());

    //add static paths
    this.app.use(express.static(path.join(__dirname, "../public")));

    var corsOptions = {
      origin: 'http://localhost:3000',
      credentials: true
    };

    this.app.use(cors(corsOptions));

    // catch 404 and forward to error handler
    this.app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
      var error = new Error("Not Found");
      err.status = 404;
      next(err);
    });
  }

  /**
   * Configure routes
   *
   * @class Server
   * @method routes
   * @return void
   */
  private routes() {
    //use router middleware
    this.app.use('/action', actionRouter);
    this.app.use('/login', loginRouter);
  }
}

var server = new Server();
export = server.app;
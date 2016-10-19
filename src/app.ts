"use strict";

import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as express from "express";
import * as session from "express-session";
import * as path from "path";
import * as cors from "cors";
import * as mongoose from "mongoose";
import * as redis from "redis";
import * as connectRedis from "connect-redis";

import { router as actionRouter } from "./routes/action";
import { router as loginRouter } from "./routes/login";

var client = redis.createClient();
client.on('connect', function () {
   console.log('Redis client connected.');
});

var app: express.Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

let RedisStore = connectRedis(session);
app.use(session({
          store: new RedisStore({client: client}),
          secret: 'keyboard cat',
          resave: false,
          saveUninitialized: true
        }));

app.use(express.static(path.join(__dirname, "../public")));

var corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true
};
app.use(cors(corsOptions));

// catch 404 and forward to error handler
app.use(function (err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
  var error = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use('/action', actionRouter);
app.use('/login', loginRouter);

mongoose.connect('mongodb://localhost/users');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("MongoDB connected.");
});


export { app };

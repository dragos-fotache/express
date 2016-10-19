import * as mongoose from "mongoose";

var schema = new mongoose.Schema({
    name: { type: String, required: true },
    password: { type: String, required: true }
});

export var User: mongoose.Model<mongoose.Document> = mongoose.model("User", schema);



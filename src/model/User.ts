import * as mongoose from "mongoose";

// import { Schema } from  "mongoose";

// export class User {

//     public constructor(public name: String, public password: String) {}
    
// }

var schema = new mongoose.Schema({
    name: { type: String, required: true },
    password: { type: String, required: true }
});

export var User: mongoose.Model<mongoose.Document> = mongoose.model("User", schema);



import mongoose from "mongoose";

mongoose.connect("URL_BASE_MONGO_DB/NAME_DB?retryWrites=true&w=majority");

let db = mongoose.connection;

export default db;
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const user = process.env.dbuser;
const pwd = encodeURI(process.env.dbpwd);
const host = process.env.host.replace('//', `//${user}:${pwd}@`);
let db;
try {
    mongoose.connect(host, { authSource: "admin" });
    db = mongoose.connection;
} catch (error) {
    console.log(error);
}

export default db;
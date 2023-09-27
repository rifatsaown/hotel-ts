"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDbConnection = exports.connectToDatabase = void 0;
require("dotenv/config");
const mongodb_1 = require("mongodb");
const uri = process.env.MONGODB_URI;
let dbConnection = null; // connection to the database is stored here once it is established the first time 
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new mongodb_1.MongoClient(uri);
const connectToDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    if (dbConnection)
        return;
    try {
        yield client.connect();
        dbConnection = client.db(process.env.DB_NAME);
        console.log("Connected successfully to Database");
    }
    catch (err) {
        console.log(err);
    }
});
exports.connectToDatabase = connectToDatabase;
// get the connection to the database 
const getDbConnection = () => {
    return dbConnection;
};
exports.getDbConnection = getDbConnection;
//# sourceMappingURL=dbConnect.js.map
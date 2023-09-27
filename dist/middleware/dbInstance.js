"use strict";
/* --------------------------------------------------------------
    This middleware is used to connect to the database and attach the database instance to the request object so that it can be accessed from the controllers directly without having to import the database instance in each controller.
-----------------------------------------------------------------------------------------*/
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
exports.dbInstance = void 0;
const dbConnect_1 = require("../utils/dbConnect");
const dbInstance = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const database = (0, dbConnect_1.getDbConnection)(); // Access the database instance directly from the request object
        req.db = database; // Attach the database instance to the request object and (req as any) is used to avoid typescript error
        next();
    }
    catch (error) {
        console.error('Error connecting to the database:', error);
        res.status(500).send({ status: 'error', message: 'Server Error' });
    }
});
exports.dbInstance = dbInstance;
//# sourceMappingURL=dbInstance.js.map
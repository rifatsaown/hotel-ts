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
exports.getSingleRooms = exports.getAllRooms = void 0;
const mongodb_1 = require("mongodb");
const getAllRooms = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = req.db.collection("rooms").find({}).toArray();
    res.json(yield result);
});
exports.getAllRooms = getAllRooms;
const getSingleRooms = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const query = { _id: new mongodb_1.ObjectId(id) };
    const result = req.db.collection("rooms").findOne(query);
    res.json(yield result);
});
exports.getSingleRooms = getSingleRooms;
//# sourceMappingURL=roomController.js.map
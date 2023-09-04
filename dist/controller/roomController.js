"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSingleRooms = exports.getAllRooms = void 0;
const mongodb_1 = require("mongodb");
const getAllRooms = async (req, res) => {
    const result = req.db.collection("rooms").find({}).toArray();
    res.json(await result);
};
exports.getAllRooms = getAllRooms;
const getSingleRooms = async (req, res) => {
    const id = req.params.id;
    const query = { _id: new mongodb_1.ObjectId(id) };
    const result = req.db.collection("rooms").findOne(query);
    res.json(await result);
};
exports.getSingleRooms = getSingleRooms;
//# sourceMappingURL=roomController.js.map
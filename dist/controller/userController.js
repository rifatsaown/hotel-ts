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
exports.addUserToDb = exports.deleteUser = exports.makeAdminUser = exports.makeUserAdmin = exports.findSuperAdmin = exports.findUserAdmin = exports.getAllUsers = void 0;
const mongodb_1 = require("mongodb");
const addUserToDb = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body;
    const data = {
        name: user === null || user === void 0 ? void 0 : user.name,
        email: user === null || user === void 0 ? void 0 : user.email,
        role: "user"
    };
    const existingUser = yield req.db.collection("users").findOne({ email: user.email });
    if (existingUser) {
        return res.status(409).send({ status: 'error', message: 'User Already Exist' });
    }
    const result = yield req.db.collection("users").insertOne(data);
    res.send(result);
});
exports.addUserToDb = addUserToDb;
// get all users
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield req.db.collection("users").find({}).toArray();
    res.send(result);
});
exports.getAllUsers = getAllUsers;
// Find user admin or not
const findUserAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.params.email;
    if (email !== req.user.email) {
        return res.status(403).send({ status: 'error', message: 'Forbiden Access' });
    }
    const user = yield req.db.collection("users").findOne({ email: email });
    const result = { admin: (user === null || user === void 0 ? void 0 : user.role) === 'admin' || (user === null || user === void 0 ? void 0 : user.role) === 'superadmin' };
    res.send(result);
});
exports.findUserAdmin = findUserAdmin;
// Find user superadmin or not
const findSuperAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.params.email;
    if (email !== req.user.email) {
        return res.status(403).send({ status: 'error', message: 'Forbiden Access' });
    }
    const user = yield req.db.collection("users").findOne({ email: email });
    const result = { superadmin: (user === null || user === void 0 ? void 0 : user.role) === 'superadmin' };
    res.send(result);
});
exports.findSuperAdmin = findSuperAdmin;
// make user admin
const makeUserAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield req.db.collection("users").updateOne({ _id: new mongodb_1.ObjectId(id) }, { $set: { role: 'admin' } });
    res.send(result);
});
exports.makeUserAdmin = makeUserAdmin;
// make admin user
const makeAdminUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield req.db.collection("users").updateOne({ _id: new mongodb_1.ObjectId(id) }, { $set: { role: 'user' } });
    res.send(result);
});
exports.makeAdminUser = makeAdminUser;
// delete user
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield req.db.collection("users").deleteOne({ _id: new mongodb_1.ObjectId(id) });
    res.send(result);
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=userController.js.map
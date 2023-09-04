"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUserToDb = exports.deleteUser = exports.makeAdminUser = exports.makeUserAdmin = exports.findSuperAdmin = exports.findUserAdmin = exports.getAllUsers = void 0;
const mongodb_1 = require("mongodb");
const addUserToDb = async (req, res) => {
    const user = req.body;
    const data = {
        name: user?.name,
        email: user?.email,
        role: "user"
    };
    const existingUser = await req.db.collection("users").findOne({ email: user.email });
    if (existingUser) {
        return res.status(409).send({ status: 'error', message: 'User Already Exist' });
    }
    const result = await req.db.collection("users").insertOne(data);
    res.send(result);
};
exports.addUserToDb = addUserToDb;
// get all users
const getAllUsers = async (req, res) => {
    const result = await req.db.collection("users").find({}).toArray();
    res.send(result);
};
exports.getAllUsers = getAllUsers;
// Find user admin or not
const findUserAdmin = async (req, res) => {
    const email = req.params.email;
    if (email !== req.user.email) {
        return res.status(403).send({ status: 'error', message: 'Forbiden Access' });
    }
    const user = await req.db.collection("users").findOne({ email: email });
    const result = { admin: user?.role === 'admin' || user?.role === 'superadmin' };
    res.send(result);
};
exports.findUserAdmin = findUserAdmin;
// Find user superadmin or not
const findSuperAdmin = async (req, res) => {
    const email = req.params.email;
    if (email !== req.user.email) {
        return res.status(403).send({ status: 'error', message: 'Forbiden Access' });
    }
    const user = await req.db.collection("users").findOne({ email: email });
    const result = { superadmin: user?.role === 'superadmin' };
    res.send(result);
};
exports.findSuperAdmin = findSuperAdmin;
// make user admin
const makeUserAdmin = async (req, res) => {
    const id = req.params.id;
    const result = await req.db.collection("users").updateOne({ _id: new mongodb_1.ObjectId(id) }, { $set: { role: 'admin' } });
    res.send(result);
};
exports.makeUserAdmin = makeUserAdmin;
// make admin user
const makeAdminUser = async (req, res) => {
    const id = req.params.id;
    const result = await req.db.collection("users").updateOne({ _id: new mongodb_1.ObjectId(id) }, { $set: { role: 'user' } });
    res.send(result);
};
exports.makeAdminUser = makeAdminUser;
// delete user
const deleteUser = async (req, res) => {
    const id = req.params.id;
    const result = await req.db.collection("users").deleteOne({ _id: new mongodb_1.ObjectId(id) });
    res.send(result);
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=userController.js.map
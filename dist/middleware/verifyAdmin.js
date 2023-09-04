"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const verifyAdmin = async (req, res, next) => {
    const email = req.user.email;
    const query = { email: email };
    const user = await req.db.collection("users").findOne(query);
    if (user?.role !== 'admin' && user?.role !== 'superadmin') {
        return res.status(403).send({ status: 'error', message: 'Forbiden Access' });
    }
    next();
};
exports.default = verifyAdmin;
//# sourceMappingURL=verifyAdmin.js.map
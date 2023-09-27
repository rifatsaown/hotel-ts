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
const verifyAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.user.email;
    const query = { email: email };
    const user = yield req.db.collection("users").findOne(query);
    if ((user === null || user === void 0 ? void 0 : user.role) !== 'admin' && (user === null || user === void 0 ? void 0 : user.role) !== 'superadmin') {
        return res.status(403).send({ status: 'error', message: 'Forbiden Access' });
    }
    next();
});
exports.default = verifyAdmin;
//# sourceMappingURL=verifyAdmin.js.map
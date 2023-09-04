"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controller/userController");
const verifyAdmin_1 = __importDefault(require("../middleware/verifyAdmin"));
const verifyJWT_1 = require("../middleware/verifyJWT");
const router = express_1.default.Router();
router.get('/allusers', verifyJWT_1.verifyJwt, verifyAdmin_1.default, userController_1.getAllUsers);
router.get("/admin/:email", verifyJWT_1.verifyJwt, userController_1.findUserAdmin);
router.get("/superadmin/:email", verifyJWT_1.verifyJwt, userController_1.findSuperAdmin);
router.patch("/makeAdmin/:id", verifyJWT_1.verifyJwt, verifyAdmin_1.default, userController_1.makeUserAdmin);
router.patch("/makeUser/:id", verifyJWT_1.verifyJwt, verifyAdmin_1.default, userController_1.makeAdminUser);
router.post("/addUserToDb", verifyJWT_1.verifyJwt, userController_1.addUserToDb);
router.delete("/deleteUser/:id", verifyJWT_1.verifyJwt, verifyAdmin_1.default, userController_1.deleteUser);
exports.default = router;
//# sourceMappingURL=userRoutes.js.map
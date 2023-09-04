"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const roomController_1 = require("../controller/roomController");
const router = express_1.default.Router();
router.get("/allrooms", roomController_1.getAllRooms);
router.get("/:id", roomController_1.getSingleRooms);
exports.default = router;
//# sourceMappingURL=roomRoutes.js.map
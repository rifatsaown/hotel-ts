"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookingController_1 = require("../controller/bookingController");
const verifyJWT_1 = require("../middleware/verifyJWT");
const router = express_1.default.Router();
router.get("/getBookingList", verifyJWT_1.verifyJwt, bookingController_1.getBookingList);
router.post("/addToBookingList", verifyJWT_1.verifyJwt, bookingController_1.addToBookingList);
router.delete("/deleteBooking/:id", verifyJWT_1.verifyJwt, bookingController_1.deleteBooking);
exports.default = router;
//# sourceMappingURL=bookingRoutes.js.map
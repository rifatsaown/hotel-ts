"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const basicInfoController_1 = require("../controller/basicInfoController");
const router = express_1.default.Router();
router.get("/hotelInfo", basicInfoController_1.getHotelInfo);
router.get("/heroDetails", basicInfoController_1.getHeroDetails);
router.get("/aboutUs", basicInfoController_1.getAboutUs);
router.get("/services", basicInfoController_1.getServices);
exports.default = router;
//# sourceMappingURL=basicInfoRoutes.js.map
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
exports.getServices = exports.getAboutUs = exports.getHeroDetails = exports.getHotelInfo = void 0;
const getHotelInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = req.db.collection('hotelInfo').find({}).toArray();
    res.send(yield result);
});
exports.getHotelInfo = getHotelInfo;
const getHeroDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = req.db.collection('heroDetails').find({}).toArray();
    res.send(yield result);
});
exports.getHeroDetails = getHeroDetails;
const getAboutUs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { section: "about" };
    const aboutData = yield req.db.collection('aboutUs').findOne(query);
    const result = aboutData;
    res.send(result);
});
exports.getAboutUs = getAboutUs;
const getServices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { section: "services" };
    const aboutData = yield req.db.collection('aboutUs').findOne(query);
    const result = aboutData;
    res.send(result);
});
exports.getServices = getServices;
//# sourceMappingURL=basicInfoController.js.map
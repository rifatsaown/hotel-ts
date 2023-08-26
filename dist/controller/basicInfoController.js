"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getServices = exports.getAboutUs = exports.getHeroDetails = exports.getHotelInfo = void 0;
const getHotelInfo = async (req, res) => {
    const result = req.db.collection('hotelInfo').find({}).toArray();
    res.send(await result);
};
exports.getHotelInfo = getHotelInfo;
const getHeroDetails = async (req, res) => {
    const result = req.db.collection('heroDetails').find({}).toArray();
    res.send(await result);
};
exports.getHeroDetails = getHeroDetails;
const getAboutUs = async (req, res) => {
    const query = { section: "about" };
    const aboutData = await req.db.collection('aboutUs').findOne(query);
    const result = aboutData;
    res.send(result);
};
exports.getAboutUs = getAboutUs;
const getServices = async (req, res) => {
    const query = { section: "services" };
    const aboutData = await req.db.collection('aboutUs').findOne(query);
    const result = aboutData;
    res.send(result);
};
exports.getServices = getServices;
//# sourceMappingURL=basicInfoController.js.map
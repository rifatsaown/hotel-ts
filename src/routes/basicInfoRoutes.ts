import express from 'express';
import { getHotelInfo, getHeroDetails, getAboutUs, getServices } from '../controller/basicInfoController';

const router = express.Router();

router.get("/hotelInfo", getHotelInfo)
router.get("/heroDetails", getHeroDetails) 
router.get("/aboutUs", getAboutUs)
router.get("/services", getServices)

export default router;
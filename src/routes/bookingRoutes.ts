import express from 'express';
import { addToBookingList ,getBookingList} from '../controller/bookingController';
import { verifyJwt } from '../middleware/verifyJWT';

const router = express.Router();


router.get("/getBookingList", verifyJwt, getBookingList)
router.post("/addToBookingList" ,verifyJwt, addToBookingList)

export default router;
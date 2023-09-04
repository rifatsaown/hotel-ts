import express from 'express';
import { addToBookingList, deleteBooking, getBookingList } from '../controller/bookingController';
import { verifyJwt } from '../middleware/verifyJWT';

const router = express.Router();


router.get("/getBookingList", verifyJwt, getBookingList)
router.post("/addToBookingList" ,verifyJwt, addToBookingList)
router.delete("/deleteBooking/:id", verifyJwt ,deleteBooking)

export default router;
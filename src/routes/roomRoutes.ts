import express from 'express';
import { getAllRooms , getSingleRooms} from '../controller/roomController';

const router = express.Router();

router.get("/allrooms", getAllRooms)
router.get("/:id", getSingleRooms)

export default router;
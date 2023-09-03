import express from 'express';
import { addUserToDb } from '../controller/userController';


const router = express.Router();

router.post("/addUserToDb", addUserToDb)


export default router;
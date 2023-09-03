import express from 'express';
import { addUserToDb } from '../controller/userController';
import { verifyJwt } from '../middleware/verifyJWT';


const router = express.Router();

router.post("/addUserToDb", verifyJwt ,addUserToDb)


export default router;
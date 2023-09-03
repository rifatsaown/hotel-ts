import express from 'express';
import { addUserToDb, deleteUser, findSuperAdmin, findUserAdmin, getAllUsers, makeAdminUser, makeUserAdmin } from '../controller/userController';
import verifyAdmin from '../middleware/verifyAdmin';
import { verifyJwt } from '../middleware/verifyJWT';


const router = express.Router();

router.get('/allusers', verifyJwt ,verifyAdmin,getAllUsers)
router.get("/admin/:email", verifyJwt ,findUserAdmin)
router.get("/superadmin/:email", verifyJwt ,findSuperAdmin)
router.patch("/makeAdmin/:id", verifyJwt ,verifyAdmin,makeUserAdmin)
router.patch("/makeUser/:id", verifyJwt ,verifyAdmin,makeAdminUser)
router.post("/addUserToDb", verifyJwt ,addUserToDb)
router.delete("/deleteUser/:id", verifyJwt ,verifyAdmin,deleteUser)


export default router;
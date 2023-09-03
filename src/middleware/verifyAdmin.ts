import { NextFunction, Request, Response } from 'express';

const verifyAdmin = async (req:Request, res:Response, next:NextFunction) => {
    const email = (req as any).user.email;
    const query = { email: email };
    const user = await req.db.collection("users").findOne(query);
    if (user?.role !== 'admin' && user?.role !== 'superadmin') {
        return res.status(403).send({ status: 'error', message: 'Forbiden Access' });
    }
    next();
}

export default verifyAdmin;
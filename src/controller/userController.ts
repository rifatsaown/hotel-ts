import { Request, Response } from 'express';

const addUserToDb = async (req:Request, res:Response) => {
    const user = req.body;
    const data = {
        name: user?.name,
        email: user?.email,
        role: "user"
    }
    const existingUser = await (req as any).db.collection("users").findOne({ email: user.email });
    if (existingUser) {
        return res.status(409).send({ status: 'error', message: 'User Already Exist' });
    }
    const result = await (req as any).db.collection("users").insertOne(data);
    res.send(result);
}

export { addUserToDb };
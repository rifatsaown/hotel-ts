import { Request, Response } from 'express';
import { ObjectId } from 'mongodb';

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
// get all users
export const getAllUsers = async (req:Request, res:Response) => {
    const result = await (req as any).db.collection("users").find({}).toArray();
    res.send(result);
}

// Find user admin or not
export const findUserAdmin = async (req:Request, res:Response) => {
    const email = req.params.email;
    if(email !== (req as any).user.email){
        return res.status(403).send({ status: 'error', message: 'Forbiden Access' });
    }
    const user = await (req as any).db.collection("users").findOne({ email: email });
    const result = { admin: user?.role === 'admin' || user?.role === 'superadmin' };
    res.send(result);
}
// Find user superadmin or not
export const findSuperAdmin = async (req:Request, res:Response) => {
    const email = req.params.email;
    if(email !== (req as any).user.email){
        return res.status(403).send({ status: 'error', message: 'Forbiden Access' });
    }
    const user = await (req as any).db.collection("users").findOne({ email: email });
    const result = { superadmin: user?.role === 'superadmin' };
    res.send(result);
}


// make user admin
export const makeUserAdmin = async (req:Request, res:Response) => {
    const id = req.params.id;
    const result = await req.db.collection("users").updateOne({ _id: new ObjectId(id) }, { $set: { role: 'admin' } });
    res.send(result);
}

// make admin user
export const makeAdminUser = async (req:Request, res:Response) => {
    const id = req.params.id;
    const result = await req.db.collection("users").updateOne({ _id: new ObjectId(id) }, { $set: { role: 'user' } });
    res.send(result);
}

// delete user
export const deleteUser = async (req:Request, res:Response) => {
    const id = req.params.id;
    const result = await req.db.collection("users").deleteOne({ _id: new ObjectId(id) });
    res.send(result);
}

export { addUserToDb };


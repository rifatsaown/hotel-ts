import { Request, Response, NextFunction } from 'express';

const verifyAdmin = async (req:Request, res:Response, next:NextFunction) => {
    const email = req.body.email;
    const userCollection = req.db.collection('users');
    const query = { email: email };
    // const query = { email: "rifatsaown0@gmail.com" };

    try{
        const user = await userCollection.findOne(query);
        if(!user || user.role !== 'admin'){
            return res.status(403).send({ status: 'error', message: 'Forbidden Access' });
        }
        next();
    }
    catch(err){
        console.log("Error Verifying Admin:",  err);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export default verifyAdmin;
import { Request, Response } from "express";
import { ObjectId } from "mongodb";

const getAllRooms = async (req: Request, res: Response) => {
    const result = req.db.collection("rooms").find({}).toArray();
    res.json(await result);
}

const getSingleRooms = async (req: Request, res: Response) => {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const result = req.db.collection("rooms").findOne(query);
    res.json(await result);
}


export { getAllRooms , getSingleRooms};
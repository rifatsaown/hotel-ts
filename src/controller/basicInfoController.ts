import { Request, Response } from 'express';

const getHotelInfo = async (req:Request, res:Response) => {
    const result = req.db.collection('hotelInfo').find({}).toArray();
    res.send(await result);
}

const getHeroDetails = async (req:Request, res:Response) => {
    const result = req.db.collection('heroDetails').find({}).toArray();
    res.send(await result);
};

const getAboutUs = async (req:Request, res:Response) => {
    const query = { section : "about" };
    const aboutData = await req.db.collection('aboutUs').findOne(query);
    const result = aboutData;
    res.send(result);
}

const getServices = async (req:Request, res:Response) => {
    const query = { section : "services" };
    const aboutData = await req.db.collection('aboutUs').findOne(query);
    const result = aboutData;
    res.send(result);
}

export { getHotelInfo, getHeroDetails, getAboutUs, getServices };
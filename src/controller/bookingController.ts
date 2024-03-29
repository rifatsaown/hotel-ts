import { Request, Response } from 'express';
import { ObjectId } from 'mongodb';

// add to booking list
const addToBookingList = async (req:Request, res:Response) => {
    const bookingCollection = req.db.collection('booking');
    const booking = req.body;
    try {
        const result = await bookingCollection.insertOne(booking);
        res.json(result);
    }
    catch (err) {
        console.log("Error Adding to Booking List:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// get booking list
const getBookingList = async (req:Request, res:Response) => {
    const email = req.query.email;
    const bookingCollection = req.db.collection('booking');
    const query = { email: email };
    try {
        const result = await bookingCollection.find(query).toArray();
        res.json(result);
    }
    catch (err) {
        console.log("Error Getting Booking List:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

// Delete Booking
const deleteBooking = async (req:Request, res:Response) => {
    const id = req.params.id;
    const bookingCollection = req.db.collection('booking');
    try {
        const result = await bookingCollection.deleteOne({ _id: new ObjectId(id) });
        res.json(result);
    }
    catch (err) {
        console.log("Error Deleting Booking:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export { addToBookingList, getBookingList ,deleteBooking};


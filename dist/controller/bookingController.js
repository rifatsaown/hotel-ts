"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBooking = exports.getBookingList = exports.addToBookingList = void 0;
const mongodb_1 = require("mongodb");
// add to booking list
const addToBookingList = async (req, res) => {
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
exports.addToBookingList = addToBookingList;
// get booking list
const getBookingList = async (req, res) => {
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
};
exports.getBookingList = getBookingList;
// Delete Booking
const deleteBooking = async (req, res) => {
    const id = req.params.id;
    const bookingCollection = req.db.collection('booking');
    try {
        const result = await bookingCollection.deleteOne({ _id: new mongodb_1.ObjectId(id) });
        res.json(result);
    }
    catch (err) {
        console.log("Error Deleting Booking:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
exports.deleteBooking = deleteBooking;
//# sourceMappingURL=bookingController.js.map
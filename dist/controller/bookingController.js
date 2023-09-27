"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBooking = exports.getBookingList = exports.addToBookingList = void 0;
const mongodb_1 = require("mongodb");
// add to booking list
const addToBookingList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookingCollection = req.db.collection('booking');
    const booking = req.body;
    try {
        const result = yield bookingCollection.insertOne(booking);
        res.json(result);
    }
    catch (err) {
        console.log("Error Adding to Booking List:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
exports.addToBookingList = addToBookingList;
// get booking list
const getBookingList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.query.email;
    const bookingCollection = req.db.collection('booking');
    const query = { email: email };
    try {
        const result = yield bookingCollection.find(query).toArray();
        res.json(result);
    }
    catch (err) {
        console.log("Error Getting Booking List:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
exports.getBookingList = getBookingList;
// Delete Booking
const deleteBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const bookingCollection = req.db.collection('booking');
    try {
        const result = yield bookingCollection.deleteOne({ _id: new mongodb_1.ObjectId(id) });
        res.json(result);
    }
    catch (err) {
        console.log("Error Deleting Booking:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
exports.deleteBooking = deleteBooking;
//# sourceMappingURL=bookingController.js.map
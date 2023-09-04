"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongodb_1 = require("mongodb");
const verifyJWT_1 = require("../middleware/verifyJWT");
const Stripe = require('stripe')(process.env.PAYMENT_SECRET_KEY);
const router = express_1.default.Router();
// create payment intent
router.post('/create-payment-intent', verifyJWT_1.verifyJwt, async (req, res) => {
    const { price } = req.body;
    const payAmount = parseInt(price);
    const amount = payAmount * 100;
    const paymentIntent = await Stripe.paymentIntents.create({
        amount: amount,
        currency: 'usd',
        payment_method_types: ['card']
    });
    res.send({
        clientSecret: paymentIntent.client_secret
    });
});
router.get('/paymentInfo/:email', verifyJWT_1.verifyJwt, async (req, res) => {
    const email = req.params.email;
    console.log(email);
    const result = await req.db.collection("paymentInfo").find({ email: email }).toArray();
    res.send(result);
});
router.post('/paymentInfo', verifyJWT_1.verifyJwt, async (req, res) => {
    const data = req.body;
    const result = await req.db.collection("paymentInfo").insertOne(data);
    const id = data.productInfo._id;
    try {
        await req.db.collection("booking").deleteOne({ _id: new mongodb_1.ObjectId(id) });
    }
    catch (error) {
        console.log(error);
    }
    res.send(result);
});
exports.default = router;
//# sourceMappingURL=paymentRoutes.js.map
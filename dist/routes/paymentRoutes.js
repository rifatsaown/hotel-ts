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
router.post('/create-payment-intent', verifyJWT_1.verifyJwt, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { price } = req.body;
    const payAmount = parseInt(price);
    const amount = payAmount * 100;
    const paymentIntent = yield Stripe.paymentIntents.create({
        amount: amount,
        currency: 'usd',
        payment_method_types: ['card']
    });
    res.send({
        clientSecret: paymentIntent.client_secret
    });
}));
router.get('/paymentInfo/:email', verifyJWT_1.verifyJwt, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.params.email;
    console.log(email);
    const result = yield req.db.collection("paymentInfo").find({ email: email }).toArray();
    res.send(result);
}));
router.post('/paymentInfo', verifyJWT_1.verifyJwt, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const result = yield req.db.collection("paymentInfo").insertOne(data);
    const id = data.productInfo._id;
    try {
        yield req.db.collection("booking").deleteOne({ _id: new mongodb_1.ObjectId(id) });
    }
    catch (error) {
        console.log(error);
    }
    res.send(result);
}));
exports.default = router;
//# sourceMappingURL=paymentRoutes.js.map
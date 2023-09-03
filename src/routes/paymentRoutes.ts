import express from 'express';
import { ObjectId } from 'mongodb';
import { verifyJwt } from '../middleware/verifyJWT';
const Stripe = require('stripe')(process.env.PAYMENT_SECRET_KEY);

const router = express.Router();

// create payment intent
router.post('/create-payment-intent', verifyJwt, async (req, res) => {
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
    })
})
router.get('/paymentInfo/:email', verifyJwt, async (req, res) => {
    const email =  req.params.email;
    console.log(email);
    const result = await (req as any).db.collection("paymentInfo").find({ email: email }).toArray();
    res.send(result);
});


router.post('/paymentInfo', verifyJwt, async (req, res) => {
    const data = req.body;
    const result = await (req as any).db.collection("paymentInfo").insertOne(data);
    const id = data.productInfo._id;
    try{
    await (req as any).db.collection("booking").deleteOne({ _id: new ObjectId(id) });
    }catch(error){
        console.log(error);
    }
    res.send(result);
});


export default router;
import cors from 'cors';
import express from 'express';
import fs from 'fs';
import jwt from 'jsonwebtoken';
import path from 'path';
import { dbInstance } from './middleware/dbInstance';

// Create Express server instance
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(dbInstance);

/* --- Home Routes --- */
app.get('/', (req, res) => {
    const filePath = fs.readFileSync(path.join(__dirname, '../public/index.html'), 'utf-8');
    res.send(filePath);
});

/* Cheak Db connected or not */
app.get('/db', (req, res) => {
    const db = (req as any).db;
    console.log(db);
    if (db) {
        res.send({ status: 'success', message: 'Database connected successfully' });
    }
    else {
        res.send({ status: 'error', message: 'Database connection failed' });
    }
});

/*------------ JWT Routes --------------*/
app.post('/jwt', (req, res) => {
    const user = req.body;
    const token = jwt.sign(user, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });
    res.send({ token });
})

// Other Routes import 
import basicInfoRoutes from './routes/basicInfoRoutes';
import bookingRoutes from './routes/bookingRoutes';
import paymentRoutes from './routes/paymentRoutes';
import roomRoutes from './routes/roomRoutes';
import userRoutes from './routes/userRoutes';

// Use Routes
app.use('/api', basicInfoRoutes);
app.use('/user', userRoutes);
app.use('/rooms', roomRoutes);
app.use('/booking', bookingRoutes);
app.use('/payment', paymentRoutes);

export default app;
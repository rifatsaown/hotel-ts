import express from 'express';
import cors from 'cors';
import fs from 'fs';
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

// Other Routes import 
import basicInfoRoutes from './routes/basicInfoRoutes';

// Use Routes
app.use('/api', basicInfoRoutes);

export default app;
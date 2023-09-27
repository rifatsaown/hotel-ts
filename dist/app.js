"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const path_1 = __importDefault(require("path"));
const dbInstance_1 = require("./middleware/dbInstance");
// Create Express server instance
const app = (0, express_1.default)();
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(dbInstance_1.dbInstance);
/* --- Home Routes --- */
app.get('/', (req, res) => {
    const filePath = fs_1.default.readFileSync(path_1.default.join(__dirname, '../public/index.html'), 'utf-8');
    res.send(filePath);
});
/* Cheak Db connected or not */
app.get('/db', (req, res) => {
    const db = req.db;
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
    const token = jsonwebtoken_1.default.sign(user, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });
    res.send({ token });
});
// Other Routes import 
const basicInfoRoutes_1 = __importDefault(require("./routes/basicInfoRoutes"));
const bookingRoutes_1 = __importDefault(require("./routes/bookingRoutes"));
const paymentRoutes_1 = __importDefault(require("./routes/paymentRoutes"));
const roomRoutes_1 = __importDefault(require("./routes/roomRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
// Use Routes
app.use('/api', basicInfoRoutes_1.default);
app.use('/user', userRoutes_1.default);
app.use('/rooms', roomRoutes_1.default);
app.use('/booking', bookingRoutes_1.default);
app.use('/payment', paymentRoutes_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map
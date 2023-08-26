"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const app_1 = __importDefault(require("./app"));
const dbConnect_1 = require("./utils/dbConnect");
const port = process.env.PORT || 5000;
try {
    app_1.default.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
        (0, dbConnect_1.connectToDatabase)();
    });
}
catch (error) {
    console.log(`Server Error: ${error}`);
}
//# sourceMappingURL=index.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./config/db"));
const Router_1 = __importDefault(require("./routes/Router"));
dotenv_1.default.config();
// const app = express();
// connect database
(0, db_1.default)();
const app = (0, express_1.default)();
// ROUTES
app.use("/api", Router_1.default);
const PORT = Number(process.env.PORT || 3000);
const HOST = process.env.HOST || 'localhost';
app.use(express_1.default.json());
app.listen(PORT, HOST, () => {
    console.log(`Server running on http://${HOST}:${PORT}`);
});

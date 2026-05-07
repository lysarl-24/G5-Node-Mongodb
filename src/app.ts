import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.ts';
import router from "./routes/Router.ts";

dotenv.config();

// connect database
connectDB();

const app = express();

app.use(express.json());

const PORT = Number(process.env.PORT || 3000);
const HOST = process.env.HOST || 'localhost';

// ROUTES
app.use("/api", router);

app.listen(PORT, HOST, () => {
    console.log(`Server running on http://${HOST}:${PORT}`);
});

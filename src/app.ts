import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.ts';
import router from "./routes/Router.ts";

dotenv.config();

// const app = express();

// connect database
connectDB();

const app = express();

// ROUTES
app.use("/api", router);

const PORT = Number(process.env.PORT || 3000);
const HOST = process.env.HOST || 'localhost';

app.use(express.json());

app.listen(PORT, HOST, () => {
    console.log(`Server running on http://${HOST}:${PORT}`);
});

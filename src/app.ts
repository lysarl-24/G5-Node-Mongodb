import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.ts';

dotenv.config();

// connect database
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

app.use(express.json());

app.listen(PORT, HOST, () => {
    console.log(`Server running on http://${HOST}:${PORT}`);
});

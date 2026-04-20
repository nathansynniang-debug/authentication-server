import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
dotenv.config();
import connectDB from './config/db.js';

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());

app.use("/api/users", authRoutes)

connectDB().then(()=>{
    app.listen(PORT, ()=>{
    console.log("App is running on PORT", PORT);
});
})



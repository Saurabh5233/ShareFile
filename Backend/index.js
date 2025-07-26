import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import fileRoutes from "./routes/fileRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send("HELLO");
});
app.use('/api/files', fileRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server started at: http://localhost:${PORT}`);
});
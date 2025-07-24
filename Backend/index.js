const express = require("express");
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
// const fileRoutes  = require('file')



dotenv.config();
connectDB();

const app = express();
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(express.json());
app.get('/', (req, res)=>{
    res.send("HELLO");
})
// app.use('/api/files', fileRoutes);
// app.use(errorHandler);

const PORT = process.env.PORT ;
app.listen(PORT, ()=>{
    console.log(`Server started at: http://localhost:${PORT}`)
});
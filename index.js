import express from 'express';
import dotenv from 'dotenv';
import dbConnection from './utils/db.js';
import router from './route.js';

const app = express();
dotenv.config({path: "./config/config.env"});


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port${process.env.PORT}`);
});

app.use(express.json());

app.use('/api',router);
dbConnection();
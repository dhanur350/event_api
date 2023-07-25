const connectToMongo = require('./db');
const express = require('express')
const cors = require('cors');
const errorHandler = require('./middlewares/errorHandlers');
const notFound = require('./middlewares/notFound');
connectToMongo();
require('dotenv').config();

const app = express();
app.use(express.json());

app.use(cors({
    origin: process.env.CORS_ORIGIN,
}));



//Available Routes
app.use('/api/v1/auth',require('./routes/auth'));
app.use('/api/v1/event',require('./routes/event'));

//Handling page not found
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 4000;
app.listen(port, () => {
   console.log(`Currently Listening at http://localhost:${port}`);
});

const mongoose = require('mongoose');
require('dotenv').config();

// const mongooseURI = `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DB_PASSWORD}@cluster5.djcxhr4.mongodb.net/?retryWrites=true&w=majority`;
const mongooseURI = `mongodb+srv://singhabhikumar360:Abhi6789@cluste6.gcizgrs.mongodb.net/?retryWrites=true&w=majority`;
// const mongooseURI = `mongodb://127.0.0.1:27017`;

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}

const connectToMongo = ()=>{
    
    mongoose.connect(mongooseURI,connectionParams)
        .then( () => {
            console.log('Connected to database ')
        })
        .catch( (err) => {
            console.error(`Error connecting to the database. \n${err}`);
        })
}

module.exports = connectToMongo;

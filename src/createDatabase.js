const subDbURI = process.env.subDatabase;
const mongoose = require ("mongoose");
const dotenv = require ("dotenv");
dotenv.config();

// connect to Database


const connectDb = async () => {
    try{
        await mongoose.connect(subDbURI);
    }catch(error){
      console.log(error);
    }
}

module.exports = connectDb;


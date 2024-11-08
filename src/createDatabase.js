const dotenv = require ('dotenv');
dotenv.config();
const mongoose = require ("mongoose");

const subDb_URI = process.env.subDatabase;
// create Database


const connectDb = async () => {
    try{
        await mongoose.connect(subDb_URI);
        console.log('connected to db')
    }catch(error){
      console.log(error);
    }
}

module.exports = connectDb;


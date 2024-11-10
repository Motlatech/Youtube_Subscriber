const subDb_URI = process.env.subDatabase;
const mongoose = require ("mongoose");


// create Database


const connectDb = async () => {
    try{
        await mongoose.connect(subDb_URI);
    }catch(error){
      console.log(error);
    }
}

module.exports = connectDb;


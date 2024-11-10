const subDbURI = process.env.subDatabase;
const mongoose = require ("mongoose");


// create Database


const connectDb = async () => {
    try{
        await mongoose.connect(subDbURI);
    }catch(error){
      console.log(error);
    }
}

module.exports = connectDb;


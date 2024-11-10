
const mongoose = require("mongoose");

const subscriberSchema = new mongoose.Schema({
    subscriberName: {
        type: String,
        required : true,
        trim: true,
        minLenght:3
    },
    subscribedChannel: {
        type : String,
        required : true,
         trim: true,
    },
    subscribedDate: {
        type : Date,
        required : true,
        default: Date.now
    }
});

module.exports = mongoose.model("Subscribers",subscriberSchema,"subscriber");

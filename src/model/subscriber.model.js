
const mongoose = require("mongoose");

const subscriberSchema = new mongoose.Schema({
    subscriberName: {
        type: String,
        required : true
    },
    subscribedChannel: {
        type : String,
        required : true
    },
    subscribedDate: {
        type : Date,
        required : true,
        default: Date.now
    }
});

module.exports = mongoose.model("Subscribers",subscriberSchema,"subscriber");
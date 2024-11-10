const subscriber = require ('../model/subscriber.model');

// GET /api/subscriber give all subscribers from database
 
const getAllSubscribers = async(req,res)=> {
    try{
        const Subscriber = await subscriber.find({});
        
       res.status(200).json({Subscriber});
       
    }catch(error){
        res.status(400).json({message :error.message});
    }
}

// using route : GET /api/subscriber/name give subscriber name and channel name 
const getSubscribersName = async(req,res)=> {
    try{
        const Subscriber= await subscriber.find({},{subscriberName:1,subscribedChannel:1,_id:0});
        res.status(200).json({Subscriber});
    }catch(error){
        res.status(400).json({message : error.message});
    }
};

const getSubscriberById = async(req,res) => {
    try{
        const id=req.params.id;
        const SubscriberById = await subscriber.findById(id);
        if(!subscriber){
            // if subscriber not found give status code 404
            return res.status(404).json("subscriber not found");
        }else{
            //if subscriber found give status code 200 with subscriber data
           return res.status(200).json({SubscriberById});
        }
       
    }catch(error){
        //handle the error
        res.status(400).json({message : error.message})
    }
}

module.exports = {getAllSubscribers,getSubscribersName,getSubscriberById}
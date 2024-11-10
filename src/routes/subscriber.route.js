const express = require ("express");
const { getAllSubscribers,getSubscriberById,getSubscribersName } = require ("../controller/subscriber.controller");

const router = express.Router();

router.use(express.json());
//routes

router.get('/subscriber' ,getAllSubscribers);
router.get('/subscriber/name' ,getSubscribersName);
router.get('/subscriber/:id' ,getSubscriberById);

module.exports = router;
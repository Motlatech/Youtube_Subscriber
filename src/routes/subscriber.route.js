const express = require ("express");
const router = express.Router();
const { getAllSubscribers,getSubscriberById,getSubscribersName } = require ("../controller/subscriber.controller");



router.use(express.json());
//routes

router.get('/subscriber' ,getAllSubscribers);
router.get('/subscriber/name' ,getSubscribersName);
router.get('/subscriber/:id' ,getSubscriberById);

module.exports = router;

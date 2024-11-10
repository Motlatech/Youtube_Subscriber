const request= require ('supertest');
const express = require('express');
const app = express();
const mongoose = require ('mongoose');
const routes = require ('.src/routes/subscriber.route');
const youtubeSubscriber =require ('./src/model/subscriber.model')

app.use(express.json());
app.use('/api',routes);



// Connect to a mock MongoDB server
beforeAll(async () => {
    const url = `mongodb://127.0.0.1/youtube_subscribers_test_db`;
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
});

// Disconnect from the mock MongoDB server
afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
});


describe('GET /api/subscriber',()=>{
    it('should return all subscribers', async()=>{
        const subscribers = [
            { name: 'John Doe', subscribedChannel: 'Music Channel' },
            { name: 'Jane Doe', subscribedChannel: 'food Channel' }
        ];
        await youtubeSubscriber.insertMany(subscribers);

        const res = await request(app).get('/api/subscriber')
        expect(res.status).toBe(200);
        expect(res.body.lenght).toBe(2);
        expect(res.body[0]).toHaveProperty('name','John Doe');
        expect(res.body[1]).toHaveProperty('name','John Doe');

    })
})

describe('GET /api/subscriber/name',()=>{
    it('should return subscribers name', async()=>{
        const res = await request(app).get('/api/subscriber/name')
        expect(res.status).toBe(200);
        expect(res.body.lenght).toBe(2);
        expect(res.body[0]).toHaveProperty('name','John Doe');
        expect(res.body[0]).toHaveProperty('subscribedChannel','Music Channel');
        expect(res.body[1]).toHaveProperty('name','John Doe');
        expect(res.body[1]).toHaveProperty('subscribedChannel','Food Channel');
       
    })
})

describe('GET /api/subscriber/:id', () => {
    it('should return a subscriber by ID', async () => {
        const subscriber = new youtubeSubscriber({ name: 'Anil Sharma', subscribedChannel: 'Fitness Channel' });
        await subscriber.save();

        const res = await request(app).get(`/api/subscriber/${subscriber._id}`);
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('name', 'Anil Sharma');
        expect(res.body).toHaveProperty('subscribedChannel', 'Fitness Channel');
    });

    it('should return 404 if subscriber not found', async () => {
        const res = await request(app).get('/api/subscribers/invalidID');
        expect(res.status).toBe(400); 
    });
});
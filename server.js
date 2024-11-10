require ('dotenv').config();
const connectDb = require ('./src/createDatabase');
const express = require ('express');
const app = express();
const path = require ('path');
const publicpath = path.join(__dirname,'./src/frontend');

const router = require ('./src/routes/subscriber.route');

app.use('/api',router);
port = process.env.PORT || 3000;

connectDb()

app.use(express.static(publicpath));

// to handle invalid endpoints
app.use((req,res) => {
    res.status(404).send("404 page not found please enter valid endpoint"); 
});


app.listen(port,()=>{ console.log('server is running on 3000')}); 

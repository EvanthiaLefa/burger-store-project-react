
import express from 'express';
import mongoose from 'mongoose';
import Subscriber from './subsriber.js';

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/emailList', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
    // Continue with server setup or other operations
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.get('/subscribe', (req, res) => {
  
  const subscriber = new Subscriber({ 
  firstName: "Suzan",
  lastName: "Miller",
  email: "miller@gmail.com" });
  subscriber.save();
  res.send('Hello, World!');
});

app.get('/get/subscribe', (req, res) => {
  Subscriber.find()
  .then((subscribers) => {
    res.send(subscribers);
  })
  .catch((error) => {
    console.error('Error retrieving subscribers:', error);
    res.status(500).send('Error retrieving subscribers');
  });
});


app.listen(8080, () => {
    console.log('Server is running on port 8080');
  });

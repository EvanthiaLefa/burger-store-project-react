
import express from 'express';
import mongoose from 'mongoose';
import Subscriber from './subsriber.js';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

// Configure body-parser middleware
app.use(bodyParser.json());

app.options('*', cors()) // include before other routes

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

app.post('/subscribe', (req, res) => {
  const { email } = req.body;
  if (!email) {
    res.status(400).send('Email is required');
    return;
  }
  const subscriber = new Subscriber({ email });
  subscriber.save()
    .then(() => {
      res.status(200).send('Subscription successful');
    })
    .catch((error) => {
      console.error('Error saving subscriber:', error);
      res.status(500).send('Error saving subscriber');
    });
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

// app.delete('/unsubscribe/all', (req, res) => {
//   Subscriber.deleteMany({})
//     .then(() => {
//       res.status(200).send('All subscribers unsubscribed successfully');
//     })
//     .catch((error) => {
//       console.error('Error deleting subscribers:', error);
//       res.status(500).send('Error deleting subscribers');
//     });
// });


app.listen(8080, () => {
    console.log('Server is running on port 8080');
  });

import mongoose from 'mongoose';

const { Schema } = mongoose;

const subscriberSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String
});

 const Subscriber = mongoose.model('Subscriber', subscriberSchema);
 export default Subscriber;

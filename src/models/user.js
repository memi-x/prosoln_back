import mongoose from 'mongoose';

let Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  password: { type: String },
  memberSince: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);

import mongoose from 'mongoose';

let Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String
});

module.exports = mongoose.model('User', UserSchema);

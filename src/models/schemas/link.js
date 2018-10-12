import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const LinkSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  category: { type: String, required: true },
  problem: { type: String, required: true },
  solution: { type: String, required: true },
  access: {
    type: String,
    enum: ['public', 'private'],
    required: true
  },
  datePosted: { type: Date, default: Date.now }
});

export default LinkSchema;

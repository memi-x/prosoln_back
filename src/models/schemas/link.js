import Schema from '../schemaSetup';

const LinkSchema = new Schema({
  link: { type: String, required: true },
  title: { type: String, required: true },
  category: { type: String, required: true },
  subCategory: { type: String, required: false },
  problem: { type: String, required: true },
  solution: { type: String, required: true },
  access: {
    type: String,
    enum: ['public', 'community', 'private'],
    required: true
  },
  hashTags: { type: String, required: false },
  dateCreated: { type: Date, default: Date.now }
});

export default LinkSchema;

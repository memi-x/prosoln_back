import Schema from '../schemaSetup';

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  memberSince: { type: Date, default: Date.now }
});

export default UserSchema;

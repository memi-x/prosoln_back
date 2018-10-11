import mongoose from 'mongoose';
import UserSchema from './schemas/user';
import LinkSchema from './schemas/link';

export const User = mongoose.model('User', UserSchema);
export const Link = mongoose.model('Link', LinkSchema);

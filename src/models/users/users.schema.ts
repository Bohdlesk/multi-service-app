import { Schema } from 'mongoose';

const UserSchema = new Schema({
  login: String,
  password: String,
});

export default UserSchema;

import { model } from 'mongoose';
import UserSchema from './users.schema';
import { IUserDocument } from './users.types';

export const UserModel = model<IUserDocument>('users', UserSchema);

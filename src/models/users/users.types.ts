import { Document, Model } from 'mongoose';

export interface IUser {
  login?: string;
  password?: string;
}

export interface IUserDocument extends IUser, Document {}

export type IUserModel = Model<IUserDocument>

import { Document, Model } from 'mongoose';

export interface IToken {
  _idSystemUser: string;
  token: string;
  expiredAt: string;
  systemFunctionIds: string;
}

export interface ITokenDocument extends IToken, Document {}

export type ITokenModel = Model<ITokenDocument>

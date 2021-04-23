import { model } from 'mongoose';
import TokenSchema from './tokens.schema';
import { ITokenDocument } from './tokens.types';

export const TokenModel = model<ITokenDocument>('tokens', TokenSchema);

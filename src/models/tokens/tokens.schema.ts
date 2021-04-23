import { Schema } from 'mongoose';

const TokenSchema = new Schema({
  _idSystemUser: { type: Schema.Types.ObjectId, ref: 'users' },
  token: String,
  expiredAt: { type: Date, expires: 1000, default: Date.now() },
  systemFunctionIds: [String],
});

export default TokenSchema;

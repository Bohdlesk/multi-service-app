import { Schema } from 'mongoose';

const TaskSchema = new Schema({
  _idSystemUser: { type: Schema.Types.ObjectId, ref: 'users' },
  name: String,
  content: String,
});

export default TaskSchema;

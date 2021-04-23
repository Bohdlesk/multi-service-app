import { model } from 'mongoose';
import TaskSchema from './tasks.schema';
import { ITaskDocument } from './tasks.types';

export const TaskModel = model<ITaskDocument>('tasks', TaskSchema);

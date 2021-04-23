import { Document, Model } from 'mongoose';

export interface ITask {
  _idSystemUser: string;
  name: string;
  content: string;
}

export interface ITaskDocument extends ITask, Document {}

export type ITaskModel = Model<ITaskDocument>

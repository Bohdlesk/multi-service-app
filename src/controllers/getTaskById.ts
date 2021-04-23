/* eslint-disable no-underscore-dangle */
import { Request, Response } from 'express';
import { TaskModel } from '../models/tasks/tasks.model';

export default async (req: Request, res: Response): Promise<void> => {
  try {
    const task = await TaskModel.findOne({ _id: req.params._id });
    res.status(200).json({
      task,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
      error,
    });
  }
};

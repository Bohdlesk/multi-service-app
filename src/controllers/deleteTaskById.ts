/* eslint-disable no-underscore-dangle */
import { Request, Response } from 'express';
import { TaskModel } from '../models/tasks/tasks.model';

export default async (req: Request, res: Response): Promise<void> => {
  try {
    // DELETE params: _id
    const isDeleted = await TaskModel.deleteOne({ _id: req.params._id });
    res.status(200).json({
      isDeleted,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
      error,
    });
  }
};

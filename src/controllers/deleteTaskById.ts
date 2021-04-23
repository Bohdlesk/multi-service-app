/* eslint-disable no-underscore-dangle */
import { Request, Response } from 'express';
import { TaskModel } from '../models/tasks/tasks.model';

export default async (req: Request, res: Response): Promise<void> => {
  try {
    if (req.headers.systemFunctionIds && req.headers.systemFunctionIds.includes('3')) {
      const isDeleted = await TaskModel.deleteOne({ _id: req.params._id });
      if (isDeleted.n) {
        res.status(200).json({
          status: 'Ok',
        });
      } else {
        res.status(500).json({
          status: 'Not Found',
        });
      }
    } else {
      res.status(401).json({
        message: 'Failed to authorize',
      });
    }
  } catch (error) {
    res.status(404).json({
      message: error.message,
      error,
    });
  }
};

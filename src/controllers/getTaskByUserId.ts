/* eslint-disable no-underscore-dangle */
import { Request, Response } from 'express';
import { TaskModel } from '../models/tasks/tasks.model';

export default async (req: Request, res: Response): Promise<void> => {
  try {
    if (req.headers.systemFunctionIds && req.headers.systemFunctionIds.includes('4')) {
      const task = await TaskModel.findOne({ _idSystemUser: String(req.query._id) });
      if (task) {
        res.status(200).json({
          task,
        });
      } else {
        res.status(404).json({
          status: 'Task is not found',
        });
      }
    } else {
      res.status(500).json({
        status: 'System function is not allowed',
      });
    }
  } catch (error) {
    res.status(404).json({
      message: error.message,
      error,
    });
  }
};

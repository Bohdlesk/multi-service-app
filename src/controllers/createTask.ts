/* eslint-disable no-underscore-dangle */
import { Request, Response } from 'express';
import { TaskModel } from '../models/tasks/tasks.model';

export default async (req: Request, res: Response): Promise<void> => {
  try {
    if (req.headers.systemFunctionIds && req.headers.systemFunctionIds.includes('1')) {
      const task = await TaskModel.create({
        ...req.body,
        _idSystemUser: req.headers._idSystemUser,
      });
      res.status(200).json({
        task,
      });
    } else {
      res.status(401).json({
        message: 'System function is not allowed',
      });
    }
  } catch (error) {
    res.status(404).json({
      message: error.message,
      error,
    });
  }
};

import { Request, Response } from 'express';
import { TaskModel } from '../models/tasks/tasks.model';

export default async (req: Request, res: Response): Promise<void> => {
  try {
    const task = await TaskModel.create({
      ...req.body,
      _idSystemUser: '6082ae5eb66a8b44eca1c3f7',
    });
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

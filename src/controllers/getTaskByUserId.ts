/* eslint-disable no-underscore-dangle */
import { Request, Response } from 'express';
import { TaskModel } from '../models/tasks/tasks.model';

export default async (req: Request, res: Response): Promise<void> => {
  try {
    // GET query : _id??
    // console.log(req.params);
    // console.log(req.query);
    // console.log(req.headers);
    const task = await TaskModel.findOne({ _idSystemUser: String(req.query._id) });
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

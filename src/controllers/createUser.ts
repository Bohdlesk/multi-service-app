import { Request, Response } from 'express';
import { UserModel } from '../models/users/users.model';

export default async (req: Request, res: Response): Promise<void> => {
  try {
    console.log('test');
    const user = await UserModel.create(req.body);
    res.status(200).json({
      user,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
      error,
    });
  }
};

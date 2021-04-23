/* eslint-disable no-underscore-dangle */
import { NextFunction, Request, Response } from 'express';

import { TokenModel } from '../models/tokens/tokens.model';

export default async (req: Request, res:Response, next: NextFunction): Promise<void > => {
  try {
    console.log(req.headers.authorization);
    const token = await TokenModel.findOne({ token: req.headers.authorization });
    if (token) {
      console.log('access passed');
      req.headers._idSystemUser = token._idSystemUser;
      req.headers.systemFunctionIds = token.systemFunctionIds;
      next();
    } else {
      console.log('access failed');
      res.status(401).json({
        message: 'Failed to authorize',
      });
    }
  } catch (error) {
    res.status(401).json({
      message: 'Failed to authorize',
      error,
    });
  }
};

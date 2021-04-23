/* eslint-disable no-underscore-dangle */
import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

import { UserModel } from '../models/users/users.model';
import { TokenModel } from '../models/tokens/tokens.model';

export default async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await UserModel.findOne({
      login: String(req.query.login),
      password: String(req.query.password),
    });
    if (user) {
      const oldToken = await TokenModel.findOne({ _idSystemUser: user._id });
      if (oldToken) {
        res.status(200).json({
          token: {
            systemFunctionIds: oldToken.systemFunctionIds,
            token: oldToken.token,
          },
        });
      } else {
        const newToken = await TokenModel.create({
          _idSystemUser: user._id,
          token: uuidv4(),
          systemFunctionIds: req.query.systemFunctionsIds,
        });
        res.status(200).json({
          token: {
            systemFunctionIds: newToken.systemFunctionIds,
            token: newToken.token,
          },
        });
      }
    } else {
      res.status(404).json({
        massage: "User does't found",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
      error,
    });
  }
};

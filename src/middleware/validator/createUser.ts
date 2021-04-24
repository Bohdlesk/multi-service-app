import * as Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import makeValidationResponse from '../../makeValidationResponse';

export default (req: Request, res: Response, next: NextFunction): void => {
  const bodySchema = Joi.object({
    login: Joi.string().required(),
    password: Joi.string().required(),
  });

  const { error: queryErrors } = bodySchema.validate(req.body);

  if (queryErrors) {
    res.status(400).json(makeValidationResponse({ queryErrors }));
  } else {
    next();
  }
};

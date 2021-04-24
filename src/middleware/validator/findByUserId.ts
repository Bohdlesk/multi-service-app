import * as Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import makeValidationResponse from '../../makeValidationResponse';

export default (req: Request, res: Response, next: NextFunction): void => {
  const querySchema = Joi.object({
    _id: Joi.string().required(),
  });

  const { error: queryErrors } = querySchema.validate(req.query);

  if (queryErrors) {
    res.status(400).json(makeValidationResponse({ queryErrors }));
  } else {
    next();
  }
};

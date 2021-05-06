import * as express from 'express';
import * as Joi from 'joi';
import ValidationError from '../helpers/validationError';

export function validatorMiddleware(validationSchema: Joi.SchemaMap): express.RequestHandler {
  return (req, _res, next) => {
    if (!req.body) {
      const validateQuery = Joi.object(validationSchema).validate(req.query);
      if (validateQuery.error) {
        throw new ValidationError(validateQuery.error.details);
      }
    } else {
      const validateBody = Joi.object(validationSchema).validate(req.body);
      if (validateBody.error) {
        throw new ValidationError(validateBody.error.details);
      }
    }

    return next();
  };
}

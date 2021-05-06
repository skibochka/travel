import { Unauthorized, BadRequest } from 'http-errors';
import * as express from 'express';
import jwt from 'jsonwebtoken';
import jwtConfig from '../config/jwt';

export async function authMiddleware(req: express.Request, _res: express.Response, next: express.NextFunction) {
  if (!req.headers.authorization) {
    throw new BadRequest('No authorization header');
  }

  const token = req.headers.authorization.split(' ')[1];
  if (!token) {
    throw new Unauthorized('Please login');
  }

  const userPayload: any = jwt.verify(token, jwtConfig.secret);

  req.user = {
    id: userPayload.id,
    isAdmin: userPayload.isAdmin,
  };

  return next();
}

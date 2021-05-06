import * as express from 'express';
import agentModel from '../models/agent';

async function index(req: express.Request, res: express.Response, next: express.NextFunction) {
  const agent = await agentModel.create(req.body);
  return res.status(200).json(agent);
}

export {
  index,
};

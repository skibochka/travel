import * as express from 'express';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { NotFound, Unauthorized, Conflict } from 'http-errors';
import jwtConfig from '../config/jwt';
import agentModel from '../models/agent';
import { IAgent } from '../interfaces/IAgent';

async function signUp(req: express.Request, res: express.Response) {
  const agentExist: IAgent | null = await agentModel.findOne({ email: req.body.email });
  if (agentExist) {
    throw new Conflict('User with such email is already exist');
  }

  req.body.password = await bcrypt.hash(req.body.password, 10);

  const agent: IAgent = await agentModel.create(req.body);
  return res.json({
    id: agent._id,
    login: agent.email,
  });
}

async function signIn(req: express.Request, res: express.Response) {
  const agent: IAgent | null = await agentModel.findOne({ email: req.body.email });
  if (!agent) {
    throw new NotFound('Sorry such agent does not exist');
  }

  const passwordCompare = await bcrypt.compare(req.body.password, agent.password);
  if (!passwordCompare) {
    throw new Unauthorized('Wrong password!');
  }

  const access = jwt.sign({ id: agent._id, email: agent.email }, jwtConfig.secret, jwtConfig.accessExpirationTime);
  const refresh = jwt.sign({ email: agent.email }, jwtConfig.secret, jwtConfig.refreshExpirationTime);

  return res.json({
    access,
    refresh,
  });
}

export {
  signUp,
  signIn,
};

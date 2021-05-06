import * as express from 'express';
import * as eah from 'express-async-handler';
import { index } from '../controllers/authController';

const authRouter = express.Router();
authRouter.post('/create', eah(index));

export default authRouter;

import * as express from 'express';
import eah from 'express-async-handler';
import { authSchemas } from '../validation/authSchemas';
import { signUp, signIn } from '../controllers/authController';
import { validatorMiddleware } from '../middlewares/validatorMiddleware';

const authRouter = express.Router();

authRouter.post('/sign-up', validatorMiddleware(authSchemas.signUp), eah(signUp));

authRouter.post('/sign-in', validatorMiddleware(authSchemas.signIn), eah(signIn));

export default authRouter;

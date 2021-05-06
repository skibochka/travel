import * as express from 'express';
import authRouter from './routes/authRouter';
import * as mongoose from 'mongoose';
import { dbConfig } from './config/db';
import bodyParser = require('body-parser');

export const appPromise = (async (): Promise<express.Application> => {
  const app = express();

  await mongoose.connect(dbConfig.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  app.use(bodyParser.json({
    inflate: true,
  }));

  app.use('/auth', authRouter);

  app.use((req: express.Request, res: express.Response, _next: express.NextFunction) => {
    return res.status(404).send({
      message: `Route ${req.url} not found`,
    });
  });
  app.use((err: express.ErrorRequestHandler, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
    return res.status(500).send({ error: err });
  });

  return app;
});

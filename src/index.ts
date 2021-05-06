import { appConfiguration } from './config/app';
import { appPromise } from './app';

appPromise().then((app) => {
  app.listen(appConfiguration.port, () => {
    console.log(`server is up and running on port ${appConfiguration.port}`);
  });
});

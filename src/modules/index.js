import userRouter from './user';
import linkRouter from './link';

const apiPrefix = '/api/v1';

const routes = app => {
  app.use(apiPrefix, userRouter);
  app.use(apiPrefix, linkRouter);
  return app;
};

export default routes;

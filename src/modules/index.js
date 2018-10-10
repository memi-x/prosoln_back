import userRouter from './user';

const apiPrefix = '/api/v1';

const routes = app => {
  app.use(apiPrefix, userRouter);
  return app;
};

export default routes;

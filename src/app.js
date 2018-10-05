import express from 'express';
import cors from 'cors';
import env from './config/environments';

const app = express();
const PORT = env.PORT || 8090;
const apiPrefix = '/api/v1';
const Router = express.Router();

Router.use((req, res, next) => {
  console.log('The first route to be called');
  next();
});

app.use(cors());
app.use(apiPrefix, Router);
app.listen(PORT);
console.log('app is listening to port', PORT);

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import env from './config/environments';
import User from './models/user';

const app = express();
const PORT = env.PORT || 8090;
const apiPrefix = '/api/v1';
const Router = express.Router();
// Connect database from .env file
mongoose.connect(env.DATABASE_URL);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

Router.use((req, res, next) => {
  console.log('The first route to be called');
  next();
});

Router.route('/user').post((req, res) => {
  let newUser = new User();
  newUser.name = req.body.name;
  newUser.save(error => {
    if (error) {
      res.send(error);
    }
    res.send('Registered successfully');
  });
});

app.use(cors());
app.use(apiPrefix, Router);
app.listen(PORT);
console.log('app is listening to port', PORT);

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import env from './config/environments';
import routes from './modules';
// import UserController from './modules/user/userController';

const app = express();
// Connect database from .env file
mongoose.connect(env.DATABASE_URL);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
const PORT = env.PORT || 8090;

routes(app);
// app.post('/register', UserController.registerUser);
app.use('*', (req, res) =>
  res.status(404).json({
    message: 'The url is not found in our system, make sure you add /api/v1/.'
  })
);

app.listen(PORT);

console.log('app is listening to port', PORT);

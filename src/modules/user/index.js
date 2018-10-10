import express from 'express';
import UserController from './userController';

const Router = express.Router();

Router.post('/register', UserController.registerUser);
Router.post('/signin', UserController.loginUser);

export default Router;

import Router from '../routerSetup';
import UserController from './userController';

Router.post('/register', UserController.registerUser);
Router.post('/signin', UserController.loginUser);

export default Router;

import User from '../../models/user';
import { Strategy, ExtractJWT } from 'passport-jwt';
import bcrypt from 'bcrypt';

class UserController {
  static async registerUser(req, res) {
    const hashedPassword = await bcrypt.hashSync(req.body.password, 8);
    let newUser = new User();
    newUser.firstName = req.body.firstName;
    newUser.lastName = req.body.lastName;
    newUser.email = req.body.email;
    newUser.password = hashedPassword;
    const doesUserExist = await User.findOne({ email: newUser.email });
    if (doesUserExist) {
      res.json({ message: 'The user with that email already exist' });
      next();
    }
    newUser.save(error => {
      if (error) {
        res.send(error);
      }
      res.send({ message: 'You are registered successfully' });
    });
  }
  static async loginUser(req, res) {
    const findUser = await User.findOne({ email: req.body.email });
    if (!findUser) {
      res.send({ message: 'The user does not exist. Please register' });
    }
    if (!bcrypt.compareSync(req.body.password, findUser.password)) {
      res.send({ message: 'Please enter correct password' });
    }
    res.send({ message: 'Successfully logged in' });
  }
  static logoutUser(req, res) {}
}

export default UserController;

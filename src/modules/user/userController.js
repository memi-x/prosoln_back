import { User } from '../../models';
// import { Strategy, ExtractJWT } from 'passport-jwt';
import bcrypt from 'bcrypt';

class UserController {
  static async registerUser(req, res) {
    let newUser = new User();
    const doesUserExist = await User.findOne({ email: newUser.email });
    if (doesUserExist) {
      res.json({ message: 'The user with that email already exist' });
    } else {
      bcrypt.hash(req.body.password, 8, (error, hash) => {
        if (error) {
          res.send(error);
        }
        newUser.firstName = req.body.firstName;
        newUser.lastName = req.body.lastName;
        newUser.email = req.body.email;
        newUser.password = hash;
        newUser.save(error => {
          if (error) {
            res.send(error);
          }
          res.status(201).send({ message: 'You are registered successfully' });
        });
      });
    }
  }
  static async loginUser(req, res) {
    const findUser = await User.findOne({ email: req.body.email });
    if (!findUser) {
      res.send({ message: 'The user does not exist. Please register' });
    }
    if (!bcrypt.compareSync(req.body.password, findUser.password)) {
      res.status(400).send({ message: 'Please enter correct password' });
    }
    res.status(200).send({ message: 'Successfully logged in' });
  }
  static logoutUser(req, res) {}
}

export default UserController;

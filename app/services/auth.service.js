const UserModel = require("../models/User.model");
const generateToken = require("../utils/generateToken");

class AuthService {
  async registerUser(userData) {
    const { name, email, password } = userData;

    const userExists = await UserModel.findOne({ email });
    if (userExists) {
      throw new Error("User already exists");
    }

    const user = await UserModel.create({
      name,
      email,
      password,
    });

    return {
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    };
  }

  async loginUser(email, password) {
    const user = await UserModel.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      return {
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      };
    } else {
      throw new Error("Invalid email or password");
    }
  }
}

module.exports = new AuthService();

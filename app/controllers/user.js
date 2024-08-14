const UserModel = require("../models/User.model");

exports.createUser = async (req, res, next) => {
  try {
    const body = req.body;

    const user = await UserModel.create(body);
  } catch (err) {
    next(err);
  }
};

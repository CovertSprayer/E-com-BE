const { BadRequestError } = require("../middlewares/errorHandler");
const UserModel = require("../models/User.model");
const jwt = require("jsonwebtoken");

exports.login = async ({ phone }) => {
  if (!phone || phone.length != 10) {
    throw new BadRequestError("Invalid Phone Number!");
  }

  let user = await UserModel.findOne({ phone: phone });

  if (!user) {
    user = await UserModel.create({ phone: phone });
  }

  const token = jwt.sign(
    {
      id: user._id,
      phone: user.phone,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  return {
    Authorization: token,
    user,
  };
};

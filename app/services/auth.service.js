const { BadRequestError } = require("../middlewares/errorHandler");

exports.login = ({ phone }) => {
  if (!phone || phone.length != 10) {
    throw new BadRequestError('Invalid Phone Number!')
  }
  console.log(phone);
  return phone;
};

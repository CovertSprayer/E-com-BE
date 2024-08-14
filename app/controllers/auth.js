const { responseHandler } = require('../middlewares/responseHandler');
const authService = require('../services/auth.service')

exports.login = async (req, res, next) => {
  try {
    const data = authService.login(req.body);
    responseHandler(res, data);

  } catch (error) {
    next(error);
  }
}
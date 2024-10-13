const authService = require("../services/auth.service");

class AuthController {
  async register(req, res){
    try {
      const newUser = await authService.registerUser(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  async login(req, res){
    const { email, password } = req.body;
    
    try {
      const loggedInUser = await authService.loginUser(email, password);
      res.status(200).json(loggedInUser);
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  };
}

module.exports = new AuthController();
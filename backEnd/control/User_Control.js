const UserModel = require("../models/Users");



const logIn = async (req, res) => {
  const { email, password } = req.body;
  let exist;
  try {
    exist = await UserModel.findOne({ email: email });
  } catch (err) {
    return new Error(err);
  }

  if (!exist) {
    return res.status(400).json({ message: "user not found" });
  }
 
  if (password != exist.password) {
    return res.status(400).json({ message: "wrong pass" });
  }
 

  console.log(exist);
  return res.status(200).json({ ww:"loged in " });
};


exports.logIn = logIn;

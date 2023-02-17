//const bcrypt = require("bcrypt");
const UserModel = require("../models/Users");
const dataSchema = require("../models/data");
const jwt = require("jsonwebtoken");
const KEY = "tess_jwt_sicret_key_for_more_sicret_connect_?";

const mongoose = require("mongoose");



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
 
  if (password !== exist.password) {
    return res.status(400).json({ message: "wrong pass" });
  }
 

  //let done = res.status(200).json({ token });
  console.log(exist);
  return res.status(200).json({ ww:"loged in " });
};



exports.logIn = logIn;

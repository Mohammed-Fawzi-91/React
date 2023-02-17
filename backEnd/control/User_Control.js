//const bcrypt = require("bcrypt");
const UserModel = require("../models/Users");
const dataSchema = require("../models/data");
const jwt = require("jsonwebtoken");
const KEY = "tess_jwt_sicret_key_for_more_sicret_connect_?";

const mongoose = require("mongoose");
const theData = mongoose.model("File", dataSchema);

const getUser = async (req, res) => {
  const userId = req.id;
  let user;
  try {
    user = await UserModel.findById(userId, "-password");
  } catch (err) {
    return new Error(err);
  }
  if (!user) {
    return res.status(404).json({ message: "not found" });
  }
  console.log("iamher");
  return res.status(200).json({ user });
};

const postUser = async (req, res) => {
  const user = req.body;
  let exist;
  try {
    exist = await UserModel.findOne({ email: user.email });

    if (exist) {
      console.log("its allredey there");
      return res.status(400).json({ message: "err" });
    } else {
      //const hashPassword = bcrypt.hashSync(user.password, 10);
      const newUser = new UserModel({
        name: user.name,
        email: user.email,
        password: user.password,
      });
      await newUser.save();

      res.json(user);
    }
  } catch (err) {}
};

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
  let isPasswordValid = compareSync(password, exist.password);
  if (!isPasswordValid) {
    return res.status(400).json({ message: "wrong pass" });
  }
  let theCode = jwt.sign({ id: exist._id }, KEY, { expiresIn: "5000s" });

  res.cookie("token", theCode, {
    path: "/",
    maxAge: 1000 * 5000,
    httpOnly: true,
    sameSite: "lax",
    domain: "localhost",
    httpOnly: true,
  });

  //let done = res.status(200).json({ token });
  console.log(theCode);
  return res.status(200).json({ theCode });
};

const veryFeidToken = (req, res, next) => {
  const cookies = req.headers.authorization;
  //console.log(cookies);
  if (cookies) {
    let token = cookies.split(" ")[1];
    console.log(token);

    jwt.verify(String(token), KEY, (err, user) => {
      if (err) {
        console.log(err);
        return res.status(400).json({ message: err + "here" });
      }
      //console.log(user.id);
      req.id = user.id;
      console.log(req.id + "heeeereee");
      next();
    });
  } else {
    return res.status(400).json({ message: "no cokkies" });
  }
};

exports.postUser = postUser;
exports.gettUser = getUser;
exports.logIn = logIn;
exports.veryFeidToken = veryFeidToken;

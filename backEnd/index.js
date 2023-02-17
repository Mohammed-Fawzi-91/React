require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const router = require("./routs/user_rout");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());

app.use(express.json());
app.use(cookieParser());
app.use("/api", router);
app.use(bodyParser.text({ type: "text/*" }));

try {
  mongoose
    .connect(
      "mongodb+srv://mohammed:mohammed@cluster0.cajisw7.mongodb.net/test1?retryWrites=true&w=majority"
    )
    .catch((err) => {
      console.log(err);
    })
    .then(() => {
      app.listen(3500, () => {
        console.log("hello bitch");
      });
    });
} catch (err) {
  console.log(err);
}

/*
 app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });*/

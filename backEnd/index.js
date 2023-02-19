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
const mongodbUri = process.env.MONGODB_URI || "mongodb://localhost:27017/myapp";
const port = process.env.PORT || 3500;

try {
  mongoose
    .connect(mongodbUri)
    .catch((err) => {
      console.log(err);
    })
    .then(() => {
  
      app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
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

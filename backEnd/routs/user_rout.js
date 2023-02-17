const express = require("express");
const multer = require("multer");
const storage = multer.memoryStorage();
const router = express.Router();
const upload = multer();
const {
  postUser,
  gettUser,
  logIn,
  veryFeidToken,
} = require("../control/User_Control");
const { addData,getData,downlod } = require("../control/data_control");

router.post("/signup", postUser);
router.get("/getUser", gettUser);
router.post("/login", logIn);
router.post("/add", upload.single("file"), addData);
router.get("/getData", getData);
router.get("/user", veryFeidToken, gettUser);
router.get('/download/:id', downlod);



module.exports = router;

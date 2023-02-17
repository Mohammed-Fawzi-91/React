const express = require("express");
const multer = require("multer");
const router = express.Router();
const upload = multer();
const { logIn} = require("../control/User_Control");
const { addData,getData,downlod } = require("../control/data_control");


router.post("/login", logIn);
router.post("/add", upload.single("file"), addData);
router.get("/getData", getData);
router.get('/download/:id', downlod);



module.exports = router;

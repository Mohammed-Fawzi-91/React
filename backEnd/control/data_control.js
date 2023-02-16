const dataSchema = require("../models/data");
const mongoose = require("mongoose");
const theData = mongoose.model("File", dataSchema);
const path = require('path');

const addData =  (req, res) => {


  const text = req.file.buffer.toString();
  const theYear = req.body.year;
  const filename = req.file.originalname;
  


  if (filename.endsWith(".csv")) {
    const basename = path.basename(filename, '.csv');

    data = new theData({
      name:basename ,
      year:theYear,
      content: text,
    });
  } else if (filename.endsWith(".txt")) {
    const basename = path.basename(filename, '.txt');

    data = new theData({
      name:basename ,
      year:theYear,
      content: text,
    });
  } else if (filename.endsWith(".txt.ok")) {
    const basename = path.basename(filename, '.txt.ok');

    data = new theData({
      name:basename ,
      year:theYear,
      content: text,
    });
  }
  theData.insertMany(data, (error) => {
    if (error) {
      console.log(error);
      res.status(500).send(error);
    } else {
      res.send("Data uploaded and stored in MongoDB");
    }
  });
};



const getData = (req, res) => {
  theData.find({}, (error, data) => {
    if (error) {
      console.log(error);
      res.status(500).send(error);
    } else {
      res.send(data);
    }
  });
};

const downlod =  (req, res) => {
  theData.findById(req.params.id, (error, data) => {
    if (error) {
      console.log(error);
      res.status(500).send(error);
    } else {
      res.setHeader('Content-disposition', `attachment; filename=${data.name}`);
      res.setHeader('Content-type', 'text/plain');
      res.send(data.content);
    }
  });
};



exports.addData = addData;
exports.getData = getData;
exports.downlod = downlod;

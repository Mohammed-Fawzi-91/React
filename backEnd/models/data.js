const mongoose = require("mongoose");
const dataSchema = new mongoose.Schema({
    name:String,
    year: Number,
    content: String,
  });
  module.exports = dataSchema;

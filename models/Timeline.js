const mongoose = require("mongoose");

const timelineSchema = new mongoose.Schema({
  year: Number,
  timeline: String,
  duration: String,
  details: String,
});

module.exports = mongoose.model("Timeline", timelineSchema);

const mongoose = require("mongoose");

// Create Schema/Model for my timeline
const timelineSchema = new mongoose.Schema({
  year: Number,
  timeline: String,
  duration: String,
  details: String,
});

module.exports = mongoose.model("Timeline", timelineSchema);

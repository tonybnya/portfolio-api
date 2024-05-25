const mongoose = require("mongoose");

// Create Schema/Model for my timeline
const TimelineSchema = new mongoose.Schema({
  year: {
    type: Number,
    required: true,
    default: new Date().getFullYear(),
  },
  timeline: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
});

const Timeline = mongoose.model("Timeline", TimelineSchema);
module.exports = Timeline;

const mongoose = require("mongoose");

// Create Schema/Model for my projects
const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  tags: [String],
  images: [String],
  liveUrl: String,
  sourceUrl: String,
});

module.exports = mongoose.model("Project", projectSchema);

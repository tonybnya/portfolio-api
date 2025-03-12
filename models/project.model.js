const mongoose = require("mongoose");

// Create Schema/Model for my projects
const ProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter project name"],
    },
    description: {
      type: String,
      required: true,
      default: "Description/Details of the project...",
    },
    tags: {
      type: [String],
      required: true,
    },
    images: {
      type: [String],
      required: false,
    },
    liveUrl: {
      type: String,
      required: true,
    },
    sourceUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Project = mongoose.model("Project", ProjectSchema);
module.exports = Project;

const mongoose = require("mongoose");

<<<<<<< HEAD
// Create Schema/Model for my projects
=======
// Create Schema/Model for my timeline
>>>>>>> b680b1bc03ba33704603c81f4fb55c28afb754f2
const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  techStack: [String],
  images: [String],
  liveUrl: String,
  sourceUrl: String,
});

module.exports = mongoose.model("Project", projectSchema);

const Project = require("../models/project.model");

// POST /api/projects - CREATE a new project (body: project data)
const createSingleProject = async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET /api/projects - READ all projects
const readAllProjects = async (req, res) => {
  try {
    const projects = await Project.find({});
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET /api/project/{id} - READ a specific project by ID
const readSingleProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findById(id);

    if (!project) {
      return res.status(404).json({ message: "Project not found."});
    }

    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// PUT /api/project/{id} - UPDATE an existing project by ID (body: updated project data)
const updateSingleProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findByIdAndUpdate(id, req.body);

    if (!project) {
      return res.status(404).json({ message: "Project not found." });
    }

    const updatedProject = await Project.findById(id);
    res.status(201).json(updatedProject);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE /api/project/{id} - DELETE a project by ID
const deleteSingleProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findByIdAndDelete(id);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.status(200).json({ message: "Project deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createSingleProject,
  readAllProjects,
  readSingleProject,
  updateSingleProject,
  deleteSingleProject,
};

const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

// POST /projects - CREATE a new project (body: project data)
router.post("/", async (req, res) => {
  const project = new Project(req.body);
  await project.save();
  res.json(project);
});

// GET /projects - READ all projects
router.get("/", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

// GET /projects/{id} - READ a specific project by ID
router.get("/projects/:id", async (req, res) => {
  const project = await Project.findById(req.params.id);
  req.json(project);
});

// PUT /projects/{id} - UPDATE an existing project by IO
router.put("/projects/:id", async (req, res) => {
  const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
    new: True,
  });
  res.json(project);
});

// DELETE /projects{id} - DELETE a specific project by ID
router.delete("/projects/:id", async (req, res) => {
  const project = await Project.findByIdAndDelete(req.params.id);
  req.json(project);
});

module.exports = router;

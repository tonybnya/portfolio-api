const express = require("express");
const router = express.Router();

const {
  createSingleProject,
  readAllProjects,
  readSingleProject,
  updateSingleProject,
  deleteSingleProject,
} = require("../controllers/project.controller");

// CREATE
router.post("/projects", createSingleProject);

// READ
router.get("/projects", readAllProjects);
router.get("/project/:id", readSingleProject);

// UPDATE
router.put("/project/:id", updateSingleProject);

// DELETE
router.delete("/project/:id", deleteSingleProject);

module.exports = router;

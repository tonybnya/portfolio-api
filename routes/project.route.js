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
router.post("/", createSingleProject);

// READ
router.get("/", readAllProjects);
router.get("/:id", readSingleProject);

// UPDATE
router.put("/:id", updateSingleProject);

// DELETE
router.delete("/:id", deleteSingleProject);

module.exports = router;

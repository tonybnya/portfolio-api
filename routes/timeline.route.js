const express = require("express");
const router = express.Router();

const {
  createSingleTimeline,
  readAllTimelines,
  readSingleTimeline,
  updateSingleTimeline,
  deleteSingleTimeline,
} = require("../controllers/timeline.controller");

// CREATE
router.post("/", createSingleTimeline);

// READ
router.get("/", readAllTimelines);
router.get("/:id", readSingleTimeline);

// UPDATE
router.put("/:id", updateSingleTimeline);

// DELETE
router.delete("/:id", deleteSingleTimeline);

module.exports = router;

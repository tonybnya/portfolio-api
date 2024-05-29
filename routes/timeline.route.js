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
router.post("/timelines", createSingleTimeline);

// READ
router.get("/timelines", readAllTimelines);
router.get("/timeline/:id", readSingleTimeline);

// UPDATE
router.put("/timeline/:id", updateSingleTimeline);

// DELETE
router.delete("/timeline/:id", deleteSingleTimeline);

module.exports = router;

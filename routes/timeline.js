const express = require("express");
const router = express.Router();
const Timeline = require("../models/Timeline");

// POST /timeline - CREATE a new timeline entry (body: timeline entry data)
router.post("/", async (req, res) => {
  const timeline = new Timeline(req.body);
  await timeline.save();
  res.json(project);
});

// GET /timeline - READ all timeline entries
router.get("/", async (req, res) => {
  const timelines = await Timeline.find();
  res.json(timelines);
});

// GET /timeline/{id} - READ a specific timeline by ID
router.get("/timeline/:id", async (req, res) => {
  const timeline = await Timeline.findById(req.params.id);
  req.json(timeline);
});

// PUT /timeline/{id} - UPDATE an existing timeline by ID
router.put("/timeline/:id", async (req, res) => {
  const timeline = await Timeline.findByIdAndUpdate(req.params.id, req.body, {
    new: True,
  });
  res.json(timeline);
});

// DELETE /timeline/{id} - DELETE a specific timeline by ID
router.delete("/timeline/:id", async (req, res) => {
  await Timeline.findByIdAndDelete(req.params.id);
  res.json({ message: "Timeline deleted successfully!" });
});

module.exports = router;

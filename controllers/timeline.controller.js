const Timeline = require("../models/timeline.model");

// POST /api/timelines - CREATE a new timeline entry (body: timeline entry data)
const createSingleTimeline = async (req, res) => {
  try {
    const timeline = await Timeline.create(req.body);
    res.status(200).json(timeline);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET /api/timelines - READ all timeline entries
const readAllTimelines = async (req, res) => {
  try {
    const timelines = await Timeline.find({});
    res.status(200).json(timelines);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET /api/timeline/{id} - READ a specific timeline entry by ID
const readSingleTimeline = async (req, res) => {
  try {
    const { id } = req.params;
    const timeline = await Timeline.findById(id);
    res.status(200).json(timeline);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// PUT /api/timeline/{id} - UPDATE an existing timeline entry by ID (body: updated timeline data)
const updateSingleTimeline = async (req, res) => {
  try {
    const { id } = req.params;
    const timeline = await Timeline.findByIdAndUpdate(id, req.body);

    if (!timeline) {
      return res.status(404).json({ message: "Timeline not found." });
    }

    const updatedTimeline = await Timeline.findById(id);
    res.status(201).json(updatedTimeline);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE /api/timeline/{id} - DELETE a timeline entry by ID
const deleteSingleTimeline = async (req, res) => {
  try {
    const { id } = req.params;
    const timeline = await Timeline.findByIdAndDelete(id);

    if (!timeline) {
      return res.status(404).json({ message: "Timeline not found" });
    }

    res.status(200).json({ message: "Timeline deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createSingleTimeline,
  readAllTimelines,
  readSingleTimeline,
  updateSingleTimeline,
  deleteSingleTimeline,
};

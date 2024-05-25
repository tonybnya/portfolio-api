const express = require("express");
const mongoose = require("mongoose");
const Project = require("./models/project.model");
const Timeline = require("./models/timeline.model");
const app = express();

// Middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from API Server");
});

// POST /api/projects - CREATE a new project (body: project data)
app.post("/api/projects", async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET /api/projects - READ all projects
app.get("/api/projects", async (req, res) => {
  try {
    const projects = await Project.find({});
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET /api/project/{id} - READ a specific project by ID
app.get("/api/project/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findById(id);
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// PUT /api/project/{id} - UPDATE an existing project by ID (body: updated project data)
app.put("/api/project/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findByIdAndUpdate(id, req.body);

    if (!project) {
      return res.status(404).json({ message: "Project not found." });
    }

    const updatedProject = await Project.findById(id);
    res.status(200).json(updatedProject);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE /api/project/{id} - DELETE a project by ID
app.delete("/api/project/:id", async (req, res) => {
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
});

// POST /api/timelines - CREATE a new timeline (body: timeline data)
app.post("/api/timelines", async (req, res) => {
  try {
    const timeline = await Timeline.create(req.body);
    res.status(200).json(timeline);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET /api/timelines - READ all timelines
app.get("/api/timelines", async (req, res) => {
  try {
    const timelines = await Timeline.find({});
    res.status(200).json(timelines);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET /api/timeline/{id} - READ a specific timeline by ID
app.get("/api/timeline/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const timeline = await Timeline.findById(id);
    res.status(200).json(timeline);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// PUT /api/timeline/{id} - UPDATE an existing timeline by ID (body: updated timeline data)
app.put("/api/timeline/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const timeline = await Timeline.findByIdAndUpdate(id, req.body);

    if (!timeline) {
      return res.status(404).json({ message: "Timeline not found." });
    }

    const updatedTimeline = await Timeline.findById(id);
    res.status(200).json(updatedTimeline);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE /api/timeline/{id} - DELETE a timeline by ID
app.delete("/api/timeline/:id", async (req, res) => {
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
});

// Start and listening to the server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});

// Connection to MongoDB
mongoose
  .connect(
    "mongodb+srv://tonybnya:H9aDF582zVBzR7bp@portfoliodb.e3aqjx8.mongodb.net/Portfolio-API?retryWrites=true&w=majority&appName=PortfolioDB",
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection Failed!");
  });

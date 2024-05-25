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

// POST /api/timelines - CREATE a new timeline (body: timeline data)
app.post("/api/timelines", async (req, res) => {
  try {
    const timeline = await Timeline.create(req.body);
    res.status(200).json(timeline);
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

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const data = require("./data.js");

const projectRoute = require("./routes/project.route");
const timelineRoute = require("./routes/timeline.route");

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // Form URL Encoded

// Routes
app.use("/api", projectRoute);
app.use("/api", timelineRoute);

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Hello from Portfolio API" });
});

app.get("/api", (req, res) => {
  return res.status(200).json(data["api"]);
});

// Connection to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to database!");
    // Do not start the server to here to run tests
    // Start and listening to the server
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection failed!", error);
  });

module.exports = app;

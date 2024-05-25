const express = require("express");
const mongoose = require("mongoose");
const ProjectRoute = require("./routes/project.route");
const TimelineRoute = require("./routes/timeline.route");
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // Form URL Encoded

// Routes
app.use("/api/products", ProjectRoute);
app.use("/api/timelines", TimelineRoute);

app.get("/", (req, res) => {
  res.send("Hello from API Server");
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

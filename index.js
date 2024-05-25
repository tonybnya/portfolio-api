const express = require("express");
const mongoose = require("mongoose");

const projectRoute = require("./routes/project.route");
const timelineRoute = require("./routes/timeline.route");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // Form URL Encoded

// Routes
app.use("/api/projects", projectRoute);
app.use("/api/timelines", timelineRoute);

app.get("/", (req, res) => {
  res.send("Hello from Portfolio API");
});

// Connection to MongoDB
mongoose
  .connect(
    "mongodb+srv://tonybnya:H9aDF582zVBzR7bp@portfoliodb.e3aqjx8.mongodb.net/Portfolio-API?retryWrites=true&w=majority&appName=PortfolioDB",
  )
  .then(() => {
    console.log("Connected to database!");
    // Start and listening to the server
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(() => {
    console.log("Connection Failed!");
  });

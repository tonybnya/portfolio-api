const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from API Server");
});

app.post("/api/projects", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

// Start and listening to the server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});

// Connection to MongoDB
mongoose
  .connect(
    "mongodb+srv://tonybnya:H9aDF582zVBzR7bp@portfoliodb.e3aqjx8.mongodb.net/?retryWrites=true&w=majority&appName=PortfolioDB",
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection Failed!");
  });

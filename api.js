const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Connection to MongoDB
mongoose.connect(process.env.MONGO_URI);

// Set routes
app.use("/projects", require("./routes/projects"));
app.use("/timeline", require("./routes/timeline"));

// Start and listening to the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
